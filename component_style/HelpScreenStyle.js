import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const HelpScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66b2ff',
    },
    header: {
        position: 'absolute',
        top: height * 0.05,
        left: width * 0.03,
        zIndex: 1,
    },
    backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 0.02,
    },
    backIcon: {
        marginRight: 5,
    },
    backButton: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        bottom: height * 0.1,
        resizeMode: 'contain',
    },
    description: {
        color: 'white',
        fontSize: 16,
        top: height * 0.08,
        marginLeft: 16,
        marginRight: 16,
        textAlign: 'center',
    },
    description2: {
        color: 'white',
        fontSize: 16,
        top: height * 0.04,
        marginLeft: 16,
        marginRight: 16,
        textAlign: 'center',
    },
    description3: {
        color: 'white',
        fontSize: 16,
        top: height * 0.11,
        marginLeft: 16,
        marginRight: 16,
        textAlign: 'center',
    },
    description4: {
        color: 'white',
        fontSize: 16,
        top: height * 0.09,
        marginLeft: 16,
        marginRight: 16,
        textAlign: 'center',
    },
    emailLink: {
        textDecorationLine: 'underline',
        color: 'blue',
        fontWeight: 'bold',
    },
    circle: {
        position: 'absolute',
        zIndex: -1,
    },
    title: {
        fontSize: 24,
        fontWeight: '900',
        color: '#333333',
        top: height * 0.06,
    },
    title2: {
        fontSize: 24,
        fontWeight: '900',
        color: '#333333',
        top: height * 0.02,
    },
    title3: {
        fontSize: 24,
        fontWeight: '900',
        color: '#333333',
        top: height * 0.09,
    },
    title4: {
        fontSize: 24,
        fontWeight: '900',
        color: '#333333',
        top: height * 0.06,
    },
    title5: {
        fontSize: 24,
        fontWeight: '900',
        color: '#333333',
        top: height * 0.07,
    }
});

export default HelpScreenStyle;
