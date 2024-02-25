import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {useFonts} from "expo-font";

/*
TODO: Ask Philipp where should we forward when someone clicks on "Forgot Password"
TODO: When clicking on remember me the data shall be saved,
      when the person logs out and logs in again the account shall be suggested.
 */
const SecondLoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleLogin = () => {
        // TODO: Implement login functionality (authentication part)
        // For now, I have simulated a successful login
        navigation.navigate('HomeScreen');
    };

    //const [fontsLoaded] = useFonts({
    //    'Urbanist': require('../assets/Urbanist-Regular.ttf'),
    //    'Urbanist-Bold': require('../assets/Urbanist-Bold.ttf'),
    //});

    return (
        <ImageBackground
            source={require('../assets/SecondLoginScreen.png')}
            style={styles.background}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/logo2.png')}
                    style={styles.logo} />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.emailInput}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor={'#333333'}
                        col
                    />
                </View>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                        placeholderTextColor={'#333333'}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <MaterialIcons
                            name={showPassword ? 'visibility' : 'visibility-off'}
                            size={24}
                            color="#333333"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.rememberMeContainer}>
                    <Text style={styles.rememberMeText}>Remember Me</Text>
                    <TouchableOpacity onPress={() => setRememberPassword(!rememberPassword)}>
                        <View style={styles.checkbox}>
                            {rememberPassword && (
                                <MaterialIcons
                                    name= 'check'
                                    size={16}
                                    style={styles.checkIcon}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        position: 'absolute',
        top: '28%',
        width: 230,
        height: 230,
        resizeMode: 'contain',
    },
    inputContainer: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 300,
    },
    emailInput: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    passwordContainer: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    passwordInput: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        padding: 10,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        //fontFamily: 'Urbanist-Regular',
    },
    rememberMeText: {
        marginRight: 10,
        color: '#333333',
        //fontFamily: 'Urbanist-Bold',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPassword: {
        textDecorationLine: 'underline',
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white',
    },
    loginButton: {
        position: 'absolute',
        bottom: 120,
        paddingVertical: 15,
        paddingHorizontal: 120,
        alignItems: 'center',
        backgroundColor: '#333333',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#333333',

    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        //fontFamily: 'Urbanist-Bold',
    },
});

export default SecondLoginScreen;
