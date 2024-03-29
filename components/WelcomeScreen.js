import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import styles from "../component_style/WelcomeScreenStyle";

//TODO: Ask Philipp about the XCode build fails and to give permission for the authentication

//TODO: if you have time, tomorrow, try to transfer the entire project to the ThesisApp
// and check whether the problems persist there. If not give that project as the final one to Philipp

//TODO: Ask Krisela to give you the logic for the toolbar and buttons
//TODO: Check everything also on the android Version

//TODO: put the other effects on the profile screen


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
