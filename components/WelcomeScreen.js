import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import styles from "../component_style/WelcomeScreenStyle";

//TODO: add Terms and Conditions, remove remember me
//TODO: translate the app to German
//TODO: fix the margins of the ProfileScreen
//TODO: add the privacy policy in the end

const WelcomeScreen = ({ navigation }) => {

    const handleContinue = () => {
        // Navigate to the next screen
        navigation.navigate('LoginScreen');
    };

    return (
        <ImageBackground
            source={require('../assets/WelcomeScreen.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Image
                    source={require('../assets/logo2.png')}
                    style={styles.logo}
                />
                <View style={styles.headlines}>
                    <Text style={styles.description}>Empowering Care, Ensuring Safety</Text>
                    <Text style={styles.subDescription}>"Connecting Doctors and Patients with Precision"</Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleContinue}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default WelcomeScreen;