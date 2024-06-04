import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const HistoryScreenStyle = StyleSheet.create({
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
        width: width - 40,
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
        left: (width - 90) / 2,
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

export default HistoryScreenStyle;