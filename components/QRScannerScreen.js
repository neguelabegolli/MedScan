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

//we have chosen expo-camera, however can be migrated to react-native vision camera
const QRScannerScreen = () => {

    //maximal length of the scanned data, which can be shown into the pop-up window
    const MAX_DISPLAY_LENGTH = 30;

    //scanned data string
    const [scanned, setScanned] = useState(false);
    const [scannedData, setScannedData] = useState(null);

    //flashlight constant
    const [torchOn, setTorchOn] = useState(false);

    //zoom slider constant
    const [zoom, setZoom] = useState(0);

    //camera reference
    const cameraRef = useRef(null);
    const navigation = useNavigation();

    //fetching the camera permission, using the hook
    const hasPermission = useCameraPermission();

    //fetching the vibration sounds effects hook
    const [isVibrationEnabled, isRingEnabled] = useVibrationSoundEffects();

    //adding the scanned data to the history tab
    const { addScanToHistory } = useContext(ScanContext);

    //handling all the scanned barcodes:
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setScannedData(data);
        addScanToHistory(data, type);

        //triggering the vibration when the scanning is successful and enabled
        if (isVibrationEnabled) {
            Vibration.vibrate();
        }
    };

    //flashlight (torch) functionality
    const toggleTorch = () => {
        setTorchOn((prev) => !prev);
    };

    //handling thr zoom slider (no gesture handler enabled here)
    const handleZoomSlider = (value) => {
        const maxZoomLevel = 2;
        const sliderMaxValue = 100;
        const mappedZoom = (value / sliderMaxValue) * maxZoomLevel;
        setZoom(mappedZoom);
    };

    //window after scanning
    const continueScanning = () => {
        setScanned(false);
        setScannedData(null);
    };

    //button to go back to the HomeScreen (I it not really needed)
    const goToHomeScreen = () => {
        navigation.navigate('HomeScreen');
    };

    //function to handle sending data to the backend (here there is a bug
    //that needs to be fixed, the scanned data is shown twice when the "Send Data"
    //button is clicked; needs to be edited)
    const sendDataToBackend = () => {
        addScanToHistory(scannedData, 'Data Matrix', 'Sent to Backend', true)
    };

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