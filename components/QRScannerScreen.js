import React, {useState, useEffect, useRef, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Vibration, Alert, Platform, Linking} from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import ScanContext from "./ScanContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

const QRScannerScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [scannedData, setScannedData] = useState(null);
    const [torchOn, setTorchOn] = useState(false);
    const [zoom, setZoom] = useState(0);
    const cameraRef = useRef(null);
    const navigation = useNavigation();

    //Vibration/Ring logic
    const [isVibrationEnabled, setIsVibrationEnabled] = useState(false);
    const [isRingEnabled, setIsRingEnabled] = useState(false);

    useEffect(() => {
        const requestCameraPermission = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
            if (status !== 'granted') {
                showPermissionAlert();
            }
        };

        requestCameraPermission();
    }, []);

    //Async Storage:
    useEffect(() => {
        const loadSettings = async () => {
            try {
                const vibrateSetting = await AsyncStorage.getItem('vibrateSetting');
                const ringSetting = await AsyncStorage.getItem('ringSetting');

                if (vibrateSetting !== null) {
                    setIsVibrationEnabled(JSON.parse(vibrateSetting));
                }
                if (ringSetting !== null) {
                    setIsRingEnabled(JSON.parse(ringSetting));
                }
            } catch (error) {
                console.error('Error loading settings: ', error);
            }
        };

        loadSettings();
    }, []);

    //Adding the scanned data to the history tab:
    const { addScanToHistory } = useContext(ScanContext);

    //Handling all the scanned barcodes:
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setScannedData(data);
        addScanToHistory(data, type);

        if (isVibrationEnabled) {
            // Trigger vibration
            // You can implement vibration logic here
            Vibration.vibrate();
        }
    };

    const MAX_DISPLAY_LENGTH = 30;

    //Torch functionality
    const toggleTorch = () => {
        setTorchOn((prev) => !prev);
    };

    const handleZoomSlider = (value) => {
        const maxZoomLevel = 2;
        const sliderMaxValue = 100;
        const mappedZoom = (value / sliderMaxValue) * maxZoomLevel;
        setZoom(mappedZoom);
    };

    //Window after scanning
    const continueScanning = () => {
        setScanned(false);
        setScannedData(null);
    };

    //Button to go back to the HomeScreen
    const goToHomeScreen = () => {
        navigation.navigate('HomeScreen');
    };

    // Function to handle sending data to the backend
    const sendDataToBackend = () => {
        // TODO: Implement sending data logic here
        addScanToHistory(scannedData, 'Data Matrix', 'Sent to Backend', true)
    };

    // Function to handle the permission prompt
    const showPermissionAlert = () => {
        Alert.alert(
            'Camera Permission Required',
            'Please grant camera permission to start scanning.',
            [
                {
                    text: 'Go to Settings',
                    onPress: () => Platform.OS === 'android' ? Linking.openSettings() : Linking.openURL('app-settings:'),
                },
                {
                    text: 'Do it Later'
                }
            ],
            { cancelable: false }
        );
    };


    //UI Rendering
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }


    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={styles.camera}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                flashMode={torchOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
                zoom={zoom}
                autoFocus={true}
            />
            {!scanned && (
                <TouchableOpacity onPress={toggleTorch} style={styles.torchButton}>
                    <MaterialIcons name={torchOn ? 'flash-off' : 'flash-on'} size={30} color="white" />
                </TouchableOpacity>
            )}
            {!scanned && (
                <View style={styles.zoomContainer}>
                    <Slider
                        style={styles.zoomSlider}
                        value={zoom}
                        minimumValue={0}
                        maximumValue={1}
                        onValueChange={handleZoomSlider}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        thumbTintColor="#FFFFFF"
                    />
                </View>
            )}
            {scanned && (
                <View style={styles.scanDataContainer}>
                    <Image
                        source={require('../assets/phone.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.successfulScanning}>Data was successfully scanned!</Text>
                    <Text style={styles.scanDataText}>
                        Scanned Data: {scannedData.length > MAX_DISPLAY_LENGTH ?
                        scannedData.substring(0, MAX_DISPLAY_LENGTH) + "..." :
                        scannedData}
                    </Text>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={continueScanning}
                    >
                        <Text style={styles.buttonText}>Continue Scanning</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={sendDataToBackend} // Call function to send data to backend
                    >
                        <Text style={styles.buttonText}>Send Data</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: '#66b2ff', marginTop: 20,}]}
                        onPress={goToHomeScreen}
                    >
                        <Text style={styles.buttonText}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    scanDataContainer: {
        backgroundColor: 'rgb(255,255,255)',
        padding: 40,
        borderRadius: 80,
        position: 'absolute',
        marginHorizontal: 15,
        alignSelf: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 200,
        marginTop: 5,
    },
    successfulScanning: {
        color: '#333333',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
    },
    scanDataText: {
        color: '#333333',
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 12,
        marginTop: 8,
        fontWeight: '200',
    },
    button: {
        backgroundColor: '#333333',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 70,
        marginBottom: 5,
        marginTop: 5,

    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    torchButton: {
        position: 'absolute',
        top: 60,
        right: 15,
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    zoomContainer: {
        position: 'absolute',
        bottom: 70,
        width: '90%',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 30,
        paddingHorizontal: 40,
        borderRadius: 90,
    },
    zoomSlider: {
        width: '70%'
    },
});

export default QRScannerScreen;