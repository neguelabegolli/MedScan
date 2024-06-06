import React, { useContext, useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ScanContext from './ScanContext';
import { useNavigation } from "@react-navigation/native";
import styles from "../component_style/HistoryScreenStyle"

//recommendation: add the search bar (optional from relevance cycle)
const HistoryScreen = () => {
    const navigation = useNavigation();
    const { scanHistory } = useContext(ScanContext);

    const goToHistoryScreen = () => {
        //we are already here
    };

    const goToProfileScreen = () => {
        navigation.navigate('ProfileScreen');
    };

    const goToHomeScreen = () => {
        navigation.navigate('HomeScreen');
    };

    //extraction of data
    const extractTypeName = (dataType) => {
        const parts = dataType.split('.');
        return parts[parts.length - 1];
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo2.png')}
                    style={styles.logo}
                />
                <Text style={styles.historyText}>Scanning History</Text>
            </View>

            {/* ScrollView for history entries */}
            <ScrollView style={styles.historyContainer}>
                {scanHistory.slice(0).reverse().map((entry, index) => (
                    <View style={styles.scanDataItem} key={index}>
                        <Text style={[styles.timestamp, styles.bold]}>
                            {new Date(entry.timestamp).toLocaleString()}
                        </Text>
                        <Text style={[styles.dataType, styles.bold]}>{extractTypeName(entry.dataType)}</Text>
                        <Text style={[styles.description, styles.bold]}>Description: {entry.description}</Text>
                        <Text style={styles.scanDataText}>{entry.data}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Toolbar */}
            <View style={styles.toolbar}>
                <TouchableOpacity style={styles.historyButton} onPress={goToHistoryScreen}>
                    <MaterialIcons
                        name="history"
                        size={36}
                        color="#333333" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileButton} onPress={goToProfileScreen}>
                    <MaterialIcons
                        name="account-circle"
                        size={32}
                        color="#333333" />
                </TouchableOpacity>
            </View>

            {/* QR Button */}
            <View style={styles.qrButtonContainer}>
                <TouchableOpacity style={styles.qrButton} onPress={goToHomeScreen}>
                    <MaterialIcons
                        name="qr-code"
                        size={50}
                        color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );

};

export default HistoryScreen;
