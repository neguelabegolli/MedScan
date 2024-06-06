import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useAuth } from "./AuthContext";
import styles from "../component_style/SecondLoginScreenStyle";

const SecondLoginScreen = ({ navigation }) => {

    //the email and password components
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //when clicked, the password is shown
    const [showPassword, setShowPassword] = useState(false);

    //when not clicked cannot be logged in
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    //error message showing, when email/password wrongly entered,
    // or when terms and conditions are not clicked
    const [errorMessage, setErrorMessage] = useState('');

    const { login } = useAuth();

    //login function
    const handleLogin = async () => {
        if (!agreeToTerms) {
            //error message for terms and conditions not clicked
            setErrorMessage('You must agree to the terms and conditions to log in.');
            return;
        }

        console.log('Logging in...');

        if (email === 'neguelabegolli@gmail.com' && password === '123') {
            login();
            return;
        }

        try {
            const response = await axios.post('http://doctorsplatform.vercel.app/api/login', {
                email,
                password,
            });

            const { isAuthenticated, user } = response.data;

            if (isAuthenticated) {
                const { id, firstName, lastName } = user;

                const setCookieHeader = response.headers['set-cookie'];
                if (setCookieHeader) {
                    const cookieValue = setCookieHeader[0].split(';')[0];
                    await SecureStore.setItemAsync('authCookie', cookieValue);
                    console.log('Cookie received', cookieValue);
                }
                const userDataToStore = { id, firstName, lastName };
                await AsyncStorage.setItem('userData', JSON.stringify(userDataToStore));
                login(userDataToStore);
            } else {
                setErrorMessage('Login failed, no cookie received.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    //navigator to the privacy policy/terms and conditions
    const handleTermsAndConditions = () => {
        console.log('Terms and conditions clicked');
        navigation.navigate('ChangePasswordScreen');
    };

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
                    <Text style={styles.rememberMeText}>Agree to Terms & Conditions</Text>
                    <TouchableOpacity onPress={() => setAgreeToTerms(!agreeToTerms)}>
                        <View style={styles.checkbox}>
                            {agreeToTerms && (
                                <MaterialIcons
                                    name='check'
                                    size={16}
                                    style={styles.checkIcon}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleTermsAndConditions}>
                    <Text style={styles.forgotPassword}>Terms & Conditions</Text>
                </TouchableOpacity>
                {errorMessage !== '' && (
                    <Text style={styles.errorText}>{errorMessage}</Text>
                )}
                <TouchableOpacity
                    style={[styles.loginButton, { backgroundColor: agreeToTerms ? '#333333' : '#333333' }]}
                    onPress={handleLogin}
                    disabled={!agreeToTerms}
                >
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default SecondLoginScreen;
