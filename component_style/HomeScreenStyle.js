import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    helpButton: {
        position: 'absolute',
        top: 70,
        right: 20,
        backgroundColor: 'transparent',
        borderRadius: 22.5,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 6,
        borderColor: 'rgb(63,63,63)',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: width * 0.99,
        height: width * 0.99,
        resizeMode: 'contain',
        marginBottom: width * 0.15,
    },
    description: {
        color: '#333333',
        top: 20,
        fontSize: width * 0.043,
    },
    subDescription: {
        color: 'white',
        fontSize: 14,
        fontStyle: 'italic',
        top: 20,
    },
    startScanningButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333',
        borderColor: '#333333',
        borderRadius: height * 0.08,
        borderWidth: 3,
        position: 'absolute',
        bottom: height * 0.27,
        width: width * 0.8,
        height: height * 0.07,
    },
    startScanningButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
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
        shadowColor: '#333333',
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
});

export default HomeScreenStyle;