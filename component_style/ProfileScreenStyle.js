import { StyleSheet, Dimensions } from 'react-native';

//TODO: this needs to be edited
const ProfileScreenStyle = StyleSheet.create({
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
        width: 180,
        height: 180,
        resizeMode: 'contain',
        bottom: 40,
    },
    containerColumn: {
        width: '85%',
        bottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#333333',
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'white',
        textAlign: 'left',

    },
    largeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    smallText: {
        fontSize: 13,
        color: 'white',
    },
    switchButton: {
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
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
        left: '50%',
        marginLeft: -45,
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

export default ProfileScreenStyle;
