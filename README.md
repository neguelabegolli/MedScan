# MedScan

MedScan is an iOS mobile application specifically designed for medical professionals in primary healthcare facilities in Germany. 
As part of a larger clinical procedure involving Clinical Decision Support Systems (CDSS), this mHealth application streamlines the process of scanning and 
interpreting Data Matrices on medication plans. MedScan ensures accurate and efficient patient care while facilitating the seamless transmission of patient data to the CDSS.

After scanning the Data Matrix at the top right corner of the individual medication plan, the general practitioner can directly send the data to the web application, where
it will be used to ensure safe clincal decisions. 

## Features

- Secure Authentication flow, to log in or sign up for the first time using the doctor's platform (POCALConnect).
- Home Screen Component, which containsa clear navigation to the other parts of the application: Scanner, History Tab, and Profile Settings.
- Scanning Functionality: Recognizes, Scans and Transmists Medication Plan data matrices. It can also recognize other types of machine readable codes, however, we let the general practitioners know that they can only scan data matrices.
- Camera Component: Contains a simple zoom in/out function and a flashlight. Upon successful scanning the user can choose to send the data to the backend, or keep scanning other ones.
- History Component: The user can see all the data he has scanned (contains the percise time of scanning, type of data that has been scanned, sent to backend flag, and the full description of the data matrix).
- Guidance Component: A simple 5-step tutorial on how to use MedScan.
- Profile Component: Contains MedScan settings regarding vibrations, ringings, log outs, privacy policies.

## Screenshots from MedScan

![Home Screen](https://github.com/neguelabegolli/MedScan/assets/74466281/6174bc64-a456-4818-b545-d2a87f8e4490)
![Scanner](https://github.com/neguelabegolli/MedScan/assets/74466281/8ff2a4af-698f-44d2-956d-116144ca35ec)
![History](https://github.com/neguelabegolli/MedScan/assets/74466281/82381e07-248a-4624-b2fe-c75236b173ca)
![Guidance](https://github.com/neguelabegolli/MedScan/assets/74466281/b0fb5a20-ced1-4341-b78b-efe34baa7341)
![Profile](https://github.com/neguelabegolli/MedScan/assets/74466281/fbc339a2-ad4c-4333-9c57-175c460e6eb1)

### Prerequisites 

- Node.js
- npm or yarn
- React Native CLI
- Android Studio (for Android)
- Xcode (for iOS)

## Intructions 
- Fork this repository
-  Clone the forked repository
-  Add your contributions (code or documentation)
-  Commit and push
-  Wait for pull request to be merged

## Acknowledgements

- React Native
- Expo / Expo Go
- POCALConnect








