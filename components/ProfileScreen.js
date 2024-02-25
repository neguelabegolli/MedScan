import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Switch, Dimensions} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


//TODO: Remove the change password screen later, it isn't needed -- said Philipp

const ProfileScreen = () => {
    const navigation = useNavigation();
    const [isVibrationEnabled, setIsVibrationEnabled] = useState(false);
    const [isRingEnabled, setIsRingEnabled] = useState(false);

    const goToHistoryScreen = () => {
        navigation.navigate('HistoryScreen');
    };

    const goToProfileScreen = () => {
        // Already on the Profile Screen
    };

    const goToHomeScreen = () => {
        navigation.navigate('HomeScreen');
    };

    const goToChangePasswordScreen = () => {
        navigation.navigate('ChangePasswordScreen');
    };

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
                <TouchableOpacity style={styles.buttonContainer} onPress={goToChangePasswordScreen}>
                    <Text style={styles.largeText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <View>
                        <Text style={[styles.largeText, { marginBottom: 5 }]}>Delete Account</Text>
                        <Text style={styles.smallText}>Account and its data will be permanently deleted.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66B2FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
        bottom: 30,
    },
    containerColumn: {
        width: '85%',
        bottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 55,
        backgroundColor: '#333333',
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'white',
        textAlign: 'left',
    },
    largeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    smallText: {
        fontSize: 13,
        color: 'white',
    },
    switchButton: {
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    },
    toolbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 10,
        width: Dimensions.get('window').width - 40,
        position: 'absolute',
        bottom: 25,
        borderRadius: 20,
        shadowColor: '#333333',
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    historyButton: {
        alignItems: 'center',
        marginRight: 40,
    },
    profileButton: {
        alignItems: 'center',
        marginLeft: 40,
    },
    qrButtonContainer: {
        position: 'absolute',
        bottom: 34,
        left: '50%',
        marginLeft: -45,
    },
    qrButton: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#66b2ff',
        borderWidth: 5,
    },
});

export default ProfileScreen;

