import {StyleSheet} from "react-native";

const QRScannerScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    scanDataContainer: {
        backgroundColor: 'rgb(255,255,255)',
        padding: 40,
        borderRadius: 80,
        position: 'absolute',
        marginHorizontal: 15,
        alignSelf: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 200,
        marginTop: 5,
    },
    successfulScanning: {
        color: '#333333',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
    },
    scanDataText: {
        color: '#333333',
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 12,
        marginTop: 8,
        fontWeight: '200',
    },
    button: {
        backgroundColor: '#333333',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 70,
        marginBottom: 5,
        marginTop: 5,

    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    torchButton: {
        position: 'absolute',
        top: 60,
        right: 15,
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    zoomContainer: {
        position: 'absolute',
        bottom: 70,
        width: '90%',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 30,
        paddingHorizontal: 40,
        borderRadius: 90,
    },
    zoomSlider: {
        width: '70%'
    },
});

export default QRScannerScreenStyle;