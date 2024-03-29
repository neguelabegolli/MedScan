import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    logo: {
        width: width * 0.70,
        height: width * 0.70,
        marginTop: height * 0.23,
        resizeMode: 'contain',
    },
    headlines: {
        marginBottom: height * 0.15,
        alignItems: 'center',
    },
    description: {
        fontSize: width * 0.045,
        textAlign: 'center',
        color: '#333333',
        fontWeight: '500',
        top: height * 0.043,
        //fontFamily: 'Urbanist-Bold',
    },
    subDescription: {
        fontSize: width * 0.040,
        textAlign: 'center',
        color: 'white',
        fontWeight: '400',
        top: height * 0.045,
        //fontFamily: 'Urbanist-Regular',
    },
    button: {
        backgroundColor: '#333333',
        paddingVertical: height * 0.025,
        paddingHorizontal: width * 0.25,
        borderRadius: 40,
        alignItems: 'center',
        marginBottom: height * 0.04,
        bottom: 70,
    },
    buttonText: {
        color: 'white',
        fontSize: width * 0.045,
        fontWeight: 'bold',
    },
});

export default WelcomeScreenStyle;
