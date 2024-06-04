import {useState} from "react";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//vibration only
export default function useVibrationSoundEffects() {
    //Vibration-Ring logic
    const [isVibrationEnabled, setIsVibrationEnabled] = useState(false);
    const [isRingEnabled, setIsRingEnabled] = useState(false);

    React.useEffect(() => {
        const loadSettings = async () => {
            try {
                const vibrateSetting = await AsyncStorage.getItem('vibrateSetting');
                const ringSetting = await AsyncStorage.getItem('ringSetting');

                if (vibrateSetting !== null) {
                    setIsVibrationEnabled(JSON.parse(vibrateSetting));
                }
                if (ringSetting !== null) {
                    setIsRingEnabled(JSON.parse(ringSetting));
                }
            } catch (error) {
                console.error('Error loading settings: ', error);
            }
        };

        loadSettings();
    }, []);


    return [isVibrationEnabled, isRingEnabled];
}