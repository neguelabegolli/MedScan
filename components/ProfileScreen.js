import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Switch, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../component_style/ProfileScreenStyle"
import {useAuth} from "./AuthContext";

//TODO: add the privacy policy
const ProfileScreen = () => {
    const navigation = useNavigation();
    const [isVibrationEnabled, setIsVibrationEnabled] = useState(false);
    const [isRingEnabled, setIsRingEnabled] = useState(false);
    const { logout } = useAuth();

    const goToHistoryScreen = () => {
        navigation.navigate('HistoryScreen');
    };

    const goToProfileScreen = () => {
        // Already on the Profile Screen
    };

    const goToHomeScreen = () => {
        navigation.navigate('HomeScreen');
    };


    const handleLogout = () => {
        logout();
        // Navigate to the WelcomeScreen
        navigation.navigate('WelcomeScreen');
    };


    // Load settings from AsyncStorage when the component mounts
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

    const saveSettings = async () => {
        try {
            await AsyncStorage.setItem('vibrateSetting', JSON.stringify(isVibrationEnabled));
            await AsyncStorage.setItem('ringSetting', JSON.stringify(isRingEnabled));
        } catch (error) {
            console.error('Error saving settings: ', error);
        }
    };

    useEffect(() => {
        saveSettings();
    }, [isVibrationEnabled, isRingEnabled]);

    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo2.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.containerColumn}>
                <Text style={styles.title}>Sound Control</Text>
                <View style={styles.buttonContainer}>
                    <View>
                        <Text style={styles.largeText}>Vibrate</Text>
                        <Text style={styles.smallText}>Vibration when scan is done</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#ffffff", true: "#ffffff" }}
                        thumbColor={isVibrationEnabled ? "#6e91ef" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(value) => setIsVibrationEnabled(value)}
                        value={isVibrationEnabled}
                        style={styles.switchButton}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View>
                        <Text style={styles.largeText}>Ring</Text>
                        <Text style={styles.smallText}>Ring when scan is done</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#ffffff", true: "#ffffff" }}
                        thumbColor={isRingEnabled ? "#6e91ef" : "#ffffff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(value) => setIsRingEnabled(value)}
                        value={isRingEnabled}
                        style={styles.switchButton}
                    />
                </View>
                <Text style={styles.title}>Log-In Information</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <View>
                        <Text style={[styles.largeText, { marginBottom: 5 }]}>Delete Account</Text>
                        <Text style={styles.smallText}>Account and its data will be permanently deleted.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={logout}>
                    <View>
                        <Text style={[styles.largeText, { marginBottom: 5 }]}>Log Out</Text>
                        <Text style={styles.smallText}>Log-in information won't be saved.</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.title}>Privacy</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <View>
                        <Text style={[styles.largeText, { marginBottom: 5 }]}>Privacy Policy</Text>
                        <Text style={styles.smallText}>Follow our policies that benefit you.</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
                <TouchableOpacity style={styles.qrButton} onPress={goToHomeScreen}>
                    <MaterialIcons
                        name="qr-code"
                        size={50}
                        color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default ProfileScreen;
