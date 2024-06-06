import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from "../component_style/HomeScreenStyle"

const HomeScreen = () => {
    const navigation = useNavigation();

    //navigation for the toolbar
    const goToHelpScreen = () => {
        console.log('Navigating to HelpScreen...');
        navigation.navigate('HelpScreen');
    };

    const goToProfileScreen = () => {
        console.log('Navigating to ProfileScreen...');
        navigation.navigate('ProfileScreen');
    };

    const goToHistoryScreen = () => {
        console.log('Navigating to HistoryScreen...');
        navigation.navigate('HistoryScreen');
    };

    const startScanningQR = () => {
        console.log('Starting QR scanning...');
        navigation.navigate('QRScannerScreen');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/HomeScreen.png')}
                style={styles.backgroundImage}
            />
            <TouchableOpacity style={styles.helpButton} onPress={goToHelpScreen}>
                <MaterialIcons
                    name="help"
                    size={30}
                    color="white"
                />
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/phone.png')}
                    style={styles.logo}
                />
                <Text style={styles.description}>Scan the QR-Code of the Medical Report</Text>
                <Text style={styles.subDescription}>Place the QR-Code inside the frame and stand still</Text>
            </View>
            <TouchableOpacity style={styles.startScanningButton} onPress={startScanningQR}>
                <Text style={styles.startScanningButtonText}>Start Scanning</Text>
            </TouchableOpacity>
            <View style={styles.toolbar}>
                <TouchableOpacity style={styles.historyButton} onPress={goToHistoryScreen}>
                    <MaterialIcons
                        name="history"
                        size={36}
                        color="#333333" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileButton} onPress={goToProfileScreen}>
                    <MaterialIcons
                        name="account-circle"
                        size={32}
                        color="#333333" />
                </TouchableOpacity>
            </View>
            <View style={styles.qrButtonContainer}>
                <TouchableOpacity style={styles.qrButton}>
                    <MaterialIcons
                        name="qr-code"
                        size={50}
                        color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;
