import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import SecondLoginScreen from "./components/SecondLoginScreen";
import HomeScreen from "./components/HomeScreen";
import HelpScreen from "./components/HelpScreen";
import ProfileScreen from "./components/ProfileScreen";
import HistoryScreen from "./components/HistoryScreen";
import QRScannerScreen from "./components/QRScannerScreen";
import ChangePasswordScreen from "./components/ChangePasswordScreen";
import {ScanProvider} from "./components/ScanContext";

const Stack = createStackNavigator();

const App = () => {
    return (
        <ScanProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SecondLoginScreen" component={SecondLoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false, gestureEnabled: false }} />
                <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ headerShown: false, gestureEnabled: false}} />
                <Stack.Screen name="QRScannerScreen" component={QRScannerScreen} options={{ headerShown: false}} />
                <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
        </ScanProvider>
    );
};

export default App;
