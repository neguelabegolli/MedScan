import { StyleSheet } from 'react-native';

const SecondLoginScreenStyle = StyleSheet.create({
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
    },
    rememberMeText: {
        marginRight: 10,
        color: '#333333',
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
    },
});

export default SecondLoginScreenStyle;
