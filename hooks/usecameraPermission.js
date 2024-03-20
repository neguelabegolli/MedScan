import {Camera} from "expo-camera";
import {useEffect} from "react";
import * as React from "react";
import {Alert, Linking, Platform} from "react-native";

export default function useCameraPermission() {
    const [status, setHasPermission] = React.useState(null);


    React.useEffect(() => {
        const requestCameraPermission = async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
            if (status !== 'granted') {
                showPermissionAlert();
            }
        };

        requestCameraPermission();
    }, []);

    return status;
}

const showPermissionAlert = () => {
    Alert.alert(
        'Camera Permission Required',
        'Please grant camera permission to start scanning.',
        [
            {
                text: 'Go to Settings',
                onPress: () => Platform.OS === 'android' ? Linking.openSettings() : Linking.openURL('app-settings:'),
            },
            {
                text: 'Do it Later'
            }
        ],
        { cancelable: false }
    );
};