import React, {useState, useEffect, useRef, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Vibration, Alert, Platform, Linking} from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import ScanContext from "./ScanContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useCameraPermission from "../hooks/usecameraPermission";
import useVibrationSoundEffects from "../hooks/useVibrationSoundEffects";
import styles from "../component_style/QRScannerScreenStyle";

//nothing to be changed here also
const QRScannerScreen = () => {

    //maximal length of the scanned data, which can be shown
    const MAX_DISPLAY_LENGTH = 30;

    const [scanned, setScanned] = useState(false);
    const [scannedData, setScannedData] = useState(null);
    const [torchOn, setTorchOn] = useState(false);
    const [zoom, setZoom] = useState(0);
    const cameraRef = useRef(null);
    const navigation = useNavigation();

    // Fetch camera permission status using the custom hook
    const hasPermission = useCameraPermission();

    // Fetch vibration using the custom hook
    const [isVibrationEnabled, isRingEnabled] = useVibrationSoundEffects();

    //Adding the scanned data to the history tab:
    const { addScanToHistory } = useContext(ScanContext);

    //Handling all the scanned barcodes:
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setScannedData(data);
        addScanToHistory(data, type);

        // Trigger vibration
        if (isVibrationEnabled) {
            Vibration.vibrate();
        }
    };

    //Torch functionality
    const toggleTorch = () => {
        setTorchOn((prev) => !prev);
    };

    //Handling thr zoomSlider
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

export default QRScannerScreen;