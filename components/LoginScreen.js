import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Dimensions, Linking } from 'react-native';
import styles from "../component_style/LoginScreenStyle"

const LoginScreen = ({ navigation }) => {
    const handleSignIn = () => {
        console.log('Signing in...');
        navigation.navigate('SecondLoginScreen');
    };

    //sign up for the first time through doctor's platform, hardcoded
    const handleSignUp = () => {
        console.log('Signing in...');
        Linking.openURL('https://doctorsplatform.vercel.app/sign-up');
    };

    return (
        <ImageBackground
            source={require('../assets/FirstLoginScreen.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/logo2.png')}
                        style={styles.logo}
                    />
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}></Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={handleSignIn}
                    style={styles.loginButton}>
                    <Text style={styles.logInText}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.signUpContainer}>
                    <Text style={styles.dontHaveAccountText}>
                        Don't have an account yet?{'\n'}
                        <Text
                            style={styles.signUpText}
                            onPress={handleSignUp}>
                            Sign up
                        </Text>
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;