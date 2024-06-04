import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from './AuthContext'; // Adjust the path as necessary
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from './LoginScreen';
import SecondLoginScreen from "./SecondLoginScreen";
import HomeScreen from "./HomeScreen";
import HelpScreen from "./HelpScreen";
import ProfileScreen from "./ProfileScreen";
import HistoryScreen from "./HistoryScreen";
import QRScannerScreen from "./QRScannerScreen";
import ChangePasswordScreen from "./ChangePasswordScreen";


const Stack = createStackNavigator();

const AuthNavigation = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Stack.Navigator initialRouteName="WelcomeScreen">
            {isAuthenticated ? (
                <>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, gestureEnabled: false }} />
                    <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false, gestureEnabled: false }} />
                    <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ headerShown: false, gestureEnabled: false}} />
                    <Stack.Screen name="QRScannerScreen" component={QRScannerScreen} options={{ headerShown: false}} />
                    <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{ headerShown: false }} />
                </>
            ) : (
                <>
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SecondLoginScreen" component={SecondLoginScreen} options={{ headerShown: false }} />
                </>
            )}
        </Stack.Navigator>
    );
};

export default AuthNavigation;