import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';


//TODO: Change the photo of the continue scanning slide...

const HelpScreen = ({ navigation }) => {
    const goBack = () => {
        console.log('Going back from HelpScreen...');
        navigation.goBack();
    };

    const handleEmailPress = () => {
        console.log('Opening email application...');
        Linking.openURL('mailto:xyz@mytum.de');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack} style={styles.backButtonContainer}>
                    <Icon
                        name="arrowleft"
                        size={24}
                        color="white"
                        style={styles.backIcon}
                    />
                    <Text style={styles.backButton}>Back</Text>
                </TouchableOpacity>
            </View>
            <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/Helpscreen1.png')}
                        style={styles.image}
                    />
                    <Text style={styles.description}>Once clicking on 'Start Scanning',
                        you will be forwarded to the camera. Lay the Medical Report on a flat, well-lightened space, so that the scanning process runs smoothly.</Text>
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/Helpscreen2.png')}
                        style={styles.image}
                    />
                    <Text style={styles.description}>Keep your smartphone still above the Data Matrix, and try to place it inside the frame,
                        so that the camera recognizes it.</Text>
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/Helpscreen3.png')}
                        style={styles.image}
                    />
                    <Text style={styles.description}>Once the Data Matrix is recognized, you will
                        see: 'Scanning successfully completed!' window on your screen and
                        a button saying 'Continue Scanning'.</Text>
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/Helpscreen4.png')}
                        style={styles.image}
                    />
                    <Text style={styles.description}>If you click on 'Continue Scanning' you can keep on scanning. However, if you wish to stop you can click on 'Go Back'-Button, which will forward
                        you on the Home Screen. If you wish to see what you have already
                        scanned, click on the History Tab.</Text>
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/Helpscreen5.png')}
                        style={styles.image}
                    />
                    <Text style={styles.description}>For any further questions or issues, please do not
                        hesitate to contact our trusted Support Team Members on:{' '}
                        <TouchableOpacity onPress={handleEmailPress}>
                            <Text style={styles.emailLink}>xyz@mytum.de</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66b2ff',
    },
    header: {
        position: 'absolute',
        top: 40,
        left: 10,
        zIndex: 1,
    },
    backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
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
        width: 400,
        height: 400,
        resizeMode: 'contain',
    },
    description: {
        color: 'white',
        fontSize: 16,
        marginTop: 20,
        marginLeft: 16,
        marginRight: 16,
        textAlign: 'center',
    },
    emailLink: {
        textDecorationLine: 'underline',
        color: 'blue',
        fontWeight: 'bold',
    },
});

export default HelpScreen;
