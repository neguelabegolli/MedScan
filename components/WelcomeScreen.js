import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import {useFonts} from "expo-font";

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {

    //<const [fontsLoaded] = useFonts({
    //     'Urbanist': require('../assets/Urbanist-Regular.ttf'),
    //    'Urbanist-Bold': require('../assets/Urbanist-Bold.ttf'),
    // });
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    logo: {
        width: width * 0.70,
        height: width * 0.70,
        marginTop: height * 0.23,
        resizeMode: 'contain',
    },
    headlines: {
        marginBottom: height * 0.15,
        alignItems: 'center',
    },
    description: {
        fontSize: width * 0.045,
        textAlign: 'center',
        color: '#333333',
        fontWeight: '500',
        top: height * 0.043,
        //fontFamily: 'Urbanist-Bold',
    },
    subDescription: {
        fontSize: width * 0.040,
        textAlign: 'center',
        color: 'white',
        fontWeight: '400',
        top: height * 0.045,
        //fontFamily: 'Urbanist-Regular',
    },
    button: {
        backgroundColor: '#333333',
        paddingVertical: height * 0.025,
        paddingHorizontal: width * 0.25,
        borderRadius: 40,
        alignItems: 'center',
        marginBottom: height * 0.04,
        bottom: 70,
    },
    buttonText: {
        color: 'white',
        fontSize: width * 0.045,
        fontWeight: 'bold',
        //fontFamily: 'Urbanist-Bold',
    },
});

export default WelcomeScreen;
