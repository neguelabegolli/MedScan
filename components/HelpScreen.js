import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Linking, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from "../component_style/HelpScreenStyle"

/*
A guidance component, containing five detailed steps to scan and send the data
- the support email, in the end of "tutorial"
 */

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HelpScreen = ({ navigation }) => {
    const goBack = () => {
        console.log('Going back from HelpScreen...');
        navigation.goBack();
    };

    //fake email, shall be changed
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
                    <View style={[styles.circle, {
                        backgroundColor: 'white',
                        width: windowWidth * 0.9,
                        height: windowWidth * 0.9,
                        borderRadius: windowWidth * 0.9 / 2,
                        top: windowHeight * 0.20,
                        left: windowWidth * 0.05,
                        shadowColor: '#333333',
                        shadowOffset: { width: windowWidth * 0.05, height: windowHeight * 0.05},
                        shadowOpacity: 0.20,
                        shadowRadius: 3.85,
                        elevation: 20 }]} />
                    <Image
                        source={require('../assets/phone.png')}
                        style={[styles.image, { width: windowWidth * 0.9, height: windowWidth * 0.75, bottom: windowHeight * 0.03 }]}
                    />
                    <Text style={styles.title}>START SCANNING</Text>
                    <Text style={styles.description}>Once clicking on 'Start Scanning', you will be forwarded to the camera.
                        Lay the Medical Report on a flat, well-lightened space, so that the scanning process runs smoothly.
                    </Text>
                </View>
                <View style={styles.slide}>
                    <View style={[styles.circle, {
                        backgroundColor: 'white',
                        width: windowWidth * 0.9,
                        height: windowWidth * 0.9,
                        borderRadius: windowWidth * 0.9 / 2,
                        top: windowHeight * 0.20,
                        left: windowWidth * 0.05,
                        shadowColor: '#333333',
                        shadowOffset: { width: windowWidth * 0.03, height: windowHeight * 0.03},
                        shadowOpacity: 0.20,
                        shadowRadius: 3.85,
                        elevation: 20 }]} />
                    <Image
                        source={require('../assets/pngtree-qr-code-scanner-for-online-payment-picture-image_8128705.png')}
                        style={[styles.image, { width: windowWidth * 0.8, height: windowWidth * 0.8, bottom: windowHeight * 0.07}]}
                    />
                    <Text style={styles.title2}>STAND STILL & SCAN</Text>
                    <Text style={styles.description2}>Keep your smartphone still above the Data-Matrix, so it is easily recognized. </Text>
                </View>
                <View style={styles.slide}>
                    <View style={[styles.circle, {
                        backgroundColor: 'white',
                        width: windowWidth * 0.9,
                        height: windowWidth * 0.9,
                        borderRadius: windowWidth * 0.9 / 2,
                        top: windowHeight * 0.20,
                        left: windowWidth * 0.05,
                        shadowColor: '#333333',
                        shadowOffset: { width: windowWidth * 0.03, height: windowHeight * 0.03},
                        shadowOpacity: 0.20,
                        shadowRadius: 3.85,
                        elevation: 20 }]} />
                    <Image
                        source={require('../assets/scan-to-pay-qr-code-payment-with-smartphone-success-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg')}
                        style={[styles.image, { width: windowWidth * 0.58, height: windowWidth * 0.58, bottom: windowHeight * 0.03 }]}
                    />
                    <Text style={styles.title3}>SUCCESSFUL SCANNING</Text>
                    <Text style={styles.description3}>Once recognized, you will
                        see a 'Data was successfully scanned!' Window on your screen and
                        three buttons as follows: 'Continue Scanning', 'Send Data', and 'Go Back'.</Text>
                </View>
                <View style={styles.slide}>
                    <View style={[styles.circle, {
                        backgroundColor: 'white',
                        width: windowWidth * 0.9,
                        height: windowWidth * 0.9,
                        borderRadius: windowWidth * 0.9 / 2,
                        top: windowHeight * 0.20,
                        left: windowWidth * 0.05,
                        shadowColor: '#333333',
                        shadowOffset: { width: windowWidth * 0.03, height: windowHeight * 0.03},
                        shadowOpacity: 0.20,
                        shadowRadius: 3.85,
                        elevation: 20 }]} />
                    <Image
                        source={require('../assets/3342004.png')}
                        style={[styles.image, { width: windowWidth * 0.7, height: windowWidth * 0.7, bottom: windowHeight * 0.01 }]}
                    />
                    <Text style={styles.title4}>KNOW THE BUTTONS</Text>
                    <Text style={styles.description}>If you click on 'Continue Scanning' you can keep on scanning.
                        If you wish to send the data to your PC, click on 'Send Data'.
                        If you wish to stop scanning, click on 'Go Back'.</Text>
                </View>
                <View style={styles.slide}>
                    <View style={[styles.circle, {
                        backgroundColor: 'white',
                        width: windowWidth * 0.9,
                        height: windowWidth * 0.9,
                        borderRadius: windowWidth * 0.9 / 2,
                        top: windowHeight * 0.20,
                        left: windowWidth * 0.05,
                        shadowColor: '#333333',
                        shadowOffset: { width: windowWidth * 0.03, height: windowHeight * 0.03},
                        shadowOpacity: 0.20,
                        shadowRadius: 3.85,
                        elevation: 20 }]} />
                    <Image
                        source={require('../assets/2706950.png')}
                        style={[styles.image, { width: windowWidth * 0.6, height: windowWidth * 0.6, bottom: windowHeight * 0.05 }]}
                    />
                    <Text style={styles.title5}>GET ASSISTANCE</Text>
                    <Text style={styles.description4}>For any further questions or issues, please do not
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
export default HelpScreen;