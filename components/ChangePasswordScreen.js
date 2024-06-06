import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Linking, TouchableOpacity} from 'react-native';


//This no change password screen, it is actually a privacy policy used
// in the terms and conditions and the profile tab


//a fake email, shall be changed later
const handleEmailPress = () => {
    console.log('Opening email application...');
    Linking.openURL('mailto:xyz@mytum.de');
};

const PrivacyPolicyScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image
                    source={require('../assets/logo2.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.frameContainer}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.frame}>
                        <Text style={styles.title}>Privacy Policy</Text>
                        <Text style={styles.lastUpdated}>Last Updated: 04.06.2024</Text>
                        <Text style={styles.content}>
                            Welcome to MedScan! We value your patient's privacy and are committed
                            to protecting their personal information.
                            This Privacy Policy outlines our practices regarding the collection, use,
                            and disclosure of information we receive from users of our medical app.
                            {"\n\n"}
                            <Text style={styles.sectionHeader}>1. Information We Collect</Text>
                            {"\n\n"}
                            <Text style={styles.subsectionHeader}>1.1 Personal Information</Text>
                            {"\n"}
                            We do not collect any personal information regarding the medication plan scanned.
                            None of the patient's date is saved locally to the device, and the information is not persistent.
                            After the session ends, the History Tab is refreshed, and no patient's data is saved.
                            {"\n\n"}
                            <Text style={styles.subsectionHeader}>1.2 Non-Personal Information</Text>
                            {"\n"}
                            We may also collect non-personal information that cannot be used to identify you, such as:
                            {"\n\n"}
                            - Device information (e.g., IP address, device type){"\n"}
                            - Usage data (e.g., app features used, time spent on the app){"\n"}
                            - Location data (if you provide consent)
                            {"\n\n"}
                            <Text style={styles.sectionHeader}>2. How We Use Your Patient's Information</Text>
                            {"\n"}We use your information to:
                            {"\n\n"}
                            - Log into your MedScan account{"\n"}
                            - Transmit the data to the POCALConnect web application{"\n"}
                            - Use the data from the medication plan of your patient against our clinical decision tool{"\n"}
                            {"\n"}
                            <Text style={styles.sectionHeader}>3. Sharing Your Information</Text>
                            {"\n"}We do not sell or rent your personal information to third parties. We may share your information with:
                            {"\n\n"}
                            - POCALConnect: Healthcare providers and medical professionals to facilitate patient care{"\n"}
                            - Third-party service providers who assist us in operating our app and services{"\n"}
                            - Legal and regulatory authorities as required by law
                            {"\n\n"}
                            <Text style={styles.sectionHeader}>4. Data Security</Text>
                            {"\n"}We implement appropriate technical and organizational measures to protect your information against unauthorized access, loss, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure.
                            {"\n\n"}
                            <Text style={styles.sectionHeader}>5. Your Rights</Text>
                            {"\n"}You have the following rights regarding your personal information:
                            {"\n\n"}
                            - Access: You can request a copy of your personal information.{"\n"}
                            - Correction: You can request correction of any inaccurate information.{"\n"}
                            - Deletion: You can request deletion of your personal information.{"\n"}
                            - Restriction: You can request restriction of processing your information.{"\n"}
                            - Objection: You can object to the processing of your information for certain purposes.
                            {"\n\n"}
                            To exercise these rights, please contact us at <TouchableOpacity onPress={handleEmailPress}>
                            <Text style={styles.emailLink}>xyz@mytum.de</Text>
                        </TouchableOpacity>{"\n"}
                            {"\n"}
                            <Text style={styles.sectionHeader}>6. Cookies and Tracking Technologies</Text>
                            {"\n"}We use cookies and similar tracking technologies to enhance your experience on our app. You can manage your cookie preferences through your device settings.
                            {"\n\n"}
                            <Text style={styles.sectionHeader}>7. Third-Party Links</Text>
                            {"\n"}Our app may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review their privacy policies.
                            {"\n\n"}
                            <Text style={styles.sectionHeader}>8. Children's Privacy</Text>
                            {"\n"}Our app is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete it from our records.
                            {"\n\n"}
                            <Text style={styles.sectionHeader}>9. Changes to This Privacy Policy</Text>
                            {"\n"}We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our app and updating the "Last Updated" date. Your continued use of the app after any changes indicates your acceptance of the updated Privacy Policy.
                            {"\n\n"}
                            <Text style={styles.sectionHeader}>10. Contact Us</Text>
                            {"\n"}If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                            {"\n\n"}
                            TUM School of Computation, Information & Technology{"\n"}
                            <TouchableOpacity onPress={handleEmailPress}>
                                <Text style={styles.emailLink}>xyz@mytum.de</Text>
                            </TouchableOpacity>{"\n"}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66b2ff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    background: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginTop: 60,
    },
    frameContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 5,
        marginBottom: 40,
    },
    frame: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 20,
        paddingBottom: 20,
        marginBottom: 20,
        width: '100%',
    },
    contentContainer: {
        paddingVertical: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333333',
    },
    lastUpdated: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
        color: '#666666',
    },
    content: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'left',
        color: '#333333',
    },
    sectionHeader: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#333333',
    },
    subsectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#666666',
    },
    emailLink: {
        textDecorationLine: 'underline',
        color: 'blue',
        fontWeight: 'bold',
        marginTop: 5,
    },
});

export default PrivacyPolicyScreen;


