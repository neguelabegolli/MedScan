import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

//don't change anything here
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {

    useEffect(() => {
        const loadStoredAuthState = async () => {
            try {
                const userDataJson = await AsyncStorage.getItem('userData');
                const userData = userDataJson ? JSON.parse(userDataJson) : null;
                const authCookie = await SecureStore.getItemAsync('authCookie');

                if (userData && authCookie) {
                    setIsAuthenticated(true);
                    setUser(userData);
                }
            } catch (error) {
                console.error("Failed to load stored authentication state!", error);
            } finally {
                //setLoading(false);
            }
        };

        loadStoredAuthState();
    }, []);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [user, setUser] = useState(null);

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
    };
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null)
    }
    /*const signUp = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
    };
     */

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};