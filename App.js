import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from "./components/AuthContext";
import { ScanProvider } from "./components/ScanContext";
import AuthNavigation from "./components/AuthNavigation";

//new application structure
const Stack = createStackNavigator();

const App = () => {
    return (
        <AuthProvider>
            <ScanProvider>
                <NavigationContainer>
                    <AuthNavigation />
                </NavigationContainer>
            </ScanProvider>
        </AuthProvider>
    );
};

export default App;