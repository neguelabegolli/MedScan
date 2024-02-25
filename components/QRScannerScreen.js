import React, {useState, useEffect, useRef, useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
//import {useCameraPermissions} from 'react-native-vision-camera'
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import ScanContext from "./ScanContext";

//TODO: My react-native-vision-camera isn't working -- if that works as planned then I will be able to fix the following
//TODO: I want to be able to focus, to zoom appropriately, and I also to have a frame in the centre
//TODO: Ba able to change the exposure
//TODO: Furthermore It seems to have some kind of bug when scanning complicated DataMatrices and/or Aztecs

const QRScannerScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [scannedData, setScannedData] = useState(null);
    const [torchOn, setTorchOn] = useState(false);
    const [zoom, setZoom] = useState(0);
    const cameraRef = useRef(null);
    const navigation = useNavigation();

    //Requesting for camera permission
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    //Adding the scanned data to the history tab
    const { addScanToHistory } = useContext(ScanContext);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setScannedData(data);
        addScanToHistory(data, type);
    };

    //Torch functionality
    const toggleTorch = () => {
        setTorchOn((prev) => !prev);
    };

    //Zoom Slider functionality which should be removed
    const handleZoomSlider = (value) => {
        setZoom(value);
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

    //UI Rendering
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={styles.camera}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                flashMode={torchOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
                zoom={zoom}
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
                    <Text style={styles.scanDataText}>Scanned Data: {scannedData}</Text>
                    <TouchableOpacity
                        style={styles.continueButton}
                        onPress={continueScanning}
                    >
                        <Text style={styles.buttonText}>Continue Scanning</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.continueButton, { backgroundColor: '#66b2ff', marginTop: 20 }]}
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
    continueButton: {
        backgroundColor: '#333333',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 70,

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
        width: '70%',
    },
});

export default QRScannerScreen;
