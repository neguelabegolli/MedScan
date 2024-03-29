import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
//import AsyncStorage from '@react-native-async-storage/async-storage
//import axios from 'axios'
//import * as SecureStore from 'expo-secure-store'
//import {useAuth} from '../AuthContext
import styles from "../component_style/SecondLoginScreenStyle";

/*
TODO: Ask Philipp where should we forward when someone clicks on "Forgot Password"
TODO: When clicking on remember me the data shall be saved
TODO: Fix the authentication with Indri
 */

const SecondLoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);
    //const [errorMessage, setErrorMessage] = useState('');

    //const {login} = useAuth();

    const handleLogin = () => {
        // For now, I have simulated a successful login
        console.log('Logging in...');
        navigation.navigate('HomeScreen');


        // TODO: Implement login functionality (authentication part)
        // this is the code

        /*if (email == 'neguelabegolli@gmail.com' && password == '123') {
        login();
        return;
        }

        try {
        const response = await axios.post('http://localhost:3000/api/login', {
        email: email,
        password: password,
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
        const userDataToStore = { id,firstName, lastName };
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
        */
    };

    const handleForgotPassword = () => {
        console.log('Forgot password clicked');
        // TODO: Implement navigation to the forgot password screen
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

export default SecondLoginScreen;
