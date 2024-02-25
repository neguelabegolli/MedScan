import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { useFonts } from "expo-font";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({ navigation }) => {
    const handleSignIn = () => {
        navigation.navigate('SecondLoginScreen');
    };

    //const [fontsLoaded] = useFonts({
    //    'Urbanist': require('../assets/Urbanist-Regular.ttf'),
    //    'Urbanist-Bold': require('../assets/Urbanist-Bold.ttf'),
    //});

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
                            onPress={() => navigation.navigate('SignUpScreen')}>
                            Sign up
                        </Text>
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: windowWidth,
        height: windowHeight
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: windowHeight * 0.2,
    },
    logo: {
        width: windowWidth * 0.7,
        height: windowWidth * 0.7,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    descriptionContainer: {
        marginTop: 10,
    },
    description: {
        color: '#333333',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: '#333333',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#333333',
        marginBottom: 40,
        paddingHorizontal: windowWidth * 0.3,
        paddingVertical: 15,
    },
    logInText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        //fontFamily: 'Urbanist-Bold',
    },
    signUpContainer: {
        alignItems: 'center',
    },
    dontHaveAccountText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        //fontFamily: 'Urbanist-Regular',
    },
    signUpText: {
        textDecorationLine: 'underline',
        color: '#333333',
        fontWeight: 'bold',
        //fontFamily: 'Urbanist-Bold',
    },
});

export default LoginScreen;

