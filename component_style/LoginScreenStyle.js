import {Dimensions, StyleSheet} from "react-native";

//the styles should not have been divided from the rest of the component
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: windowWidth,
        height: windowHeight
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: windowHeight * 0.2,
    },
    logo: {
        width: windowWidth * 0.7,
        height: windowWidth * 0.7,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    descriptionContainer: {
        marginTop: 10,
    },
    description: {
        color: '#333333',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: '#333333',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#333333',
        marginBottom: 40,
        paddingHorizontal: windowWidth * 0.3,
        paddingVertical: 15,
    },
    logInText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    signUpContainer: {
        alignItems: 'center',
    },
    dontHaveAccountText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
    signUpText: {
        textDecorationLine: 'underline',
        color: '#333333',
        fontWeight: 'bold',
    },
});
export default LoginScreenStyle;