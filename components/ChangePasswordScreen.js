import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';


const ChangePasswordScreen = ({ navigation }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = () => {
    };

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image
                    source={require('../assets/logo2.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.header}>

            </View>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Old Password"
                    secureTextEntry
                    value={oldPassword}
                    onChangeText={setOldPassword}
                    placeholderTextColor={'#333333'}
                />
                <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    secureTextEntry
                    value={newPassword}
                    onChangeText={setNewPassword}
                    placeholderTextColor={'#333333'}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm New Password"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholderTextColor={'#333333'}
                />
                <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66b2ff',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    background: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 220,
        height: 220,
        resizeMode: 'contain',
        position: 'absolute',
        top: 150,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        paddingHorizontal: 20,
        paddingTop: 20,
        top: 80,
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center',
        position: 'absolute',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        top: 70,
    },
    button: {
        backgroundColor: '#333333',
        padding: 15,
        borderRadius: 15,
        width: '80%',
        alignItems: 'center',
        top: 100,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
    },
});

export default ChangePasswordScreen;