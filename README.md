# 📌 React Native Mapxus HSITP

A **React Native** integration of the **Mapxus HSITP** SDK — enabling developers to easily embed Mapxus indoor maps and interactive map views in mobile applications.

---

## 📖 How to Use (Start from Version 0.1.13)
1. Install the package. In case of updating the package, please delete your existing node_modules. 
   ```sh
   npm install https://github.com/nauvalrafli/react_hsitp_mapxus_public/releases/download/HSITP_0.1.13/react-native-mapxus-hsitp-0.1.13.tgz
   ```
2. Import and use the Mapxus

## 📖 How to Use (Up to Version 0.1.12)

1. Install the package. In case of updating the package, please delete your existing node_modules. 
   ```sh
   npm install https://github.com/nauvalrafli/react_hsitp_mapxus_public/releases/download/HSITP_v0.1.6/react-native-mapxus-hsitp-0.1.6.tgz
   ```

2. Import and use the MapxusHsitpView component in your app along with request permission required for the app. You can customize the view based on your needs, just wrap it with the component provided.
   
   Note: please avoid using a clickable component such as Button for the time being. As it will ignore the click event and prevent opening the application which shows the map.
   
   ```js
   import React from 'react';
   import { View, StyleSheet, PermissionsAndroid } from 'react-native';
   import { MapxusHsitpView } from 'react-native-mapxus-hsitp';

   async function requestPermissions() {
     try {
       const granted = await PermissionsAndroid.requestMultiple([
         PermissionsAndroid.PERMISSIONS.CAMERA,
         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
         PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
       ]);
       console.log(granted);
     } catch (err) {
       console.warn(err);
     }
   }

   export default function App() {
     requestPermissions();
   
     return (
       <View style={styles.container}>
         <MapxusButtonWrapperView>
           <Text>Open Map</Text>
         </MapxusButtonWrapperView>
       </View>
     );
   }

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     nativeView: {
       width: '100%',
       height: '100%',
     },
   });
   ```
7. For more detailed information about how to implement please check in folder example
