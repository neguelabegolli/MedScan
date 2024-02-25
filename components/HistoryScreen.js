import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ScanContext from './ScanContext';
import { useNavigation } from "@react-navigation/native";

//TODO: Everything scanned should appear here, even though we might close the app,
// After logging out nothing should appear here at first


const HistoryScreen = () => {
    const navigation = useNavigation();
    const { scanHistory } = useContext(ScanContext);

    const goToHistoryScreen = () => {
        // Already Here
    };

    const goToProfileScreen = () => {
        navigation.navigate('ProfileScreen');
    };

    const goToHomeScreen = () => {
        navigation.navigate('HomeScreen');
    };

    const extractTypeName = (dataType) => {
        const parts = dataType.split('.');
        return parts[parts.length - 1]; // Extracting the last part after splitting by '.'
    };


// Inside your HistoryScreen component

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66B2FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 15,
        marginTop: 80,
    },
    historyText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    historyContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 130,
    },
    scanDataItem: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    scanDataText: {
        color: '#333333',
        fontSize: 16,
    },
    toolbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 10,
        width: Dimensions.get('window').width - 40,
        position: 'absolute',
        bottom: 25,
        borderRadius: 20,
        shadowColor: '#66b2ff',
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    historyButton: {
        alignItems: 'center',
        marginRight: 40,
    },
    profileButton: {
        alignItems: 'center',
        marginLeft: 40,
    },
    qrButtonContainer: {
        position: 'absolute',
        bottom: 34,
        left: (Dimensions.get('window').width - 90) / 2,
    },
    qrButton: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#66b2ff',
        borderWidth: 5,
    },
    bold: {
        fontWeight: 'bold',
    },
    timestamp: {
        marginBottom: 10,
    },
    dataType: {
        marginBottom: 10,
        fontSize: 17,
    },
    description: {
        marginBottom: 5,
    },
});

export default HistoryScreen;
