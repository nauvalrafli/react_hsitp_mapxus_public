# 📌 React Native Mapxus HSITP

A **React Native** integration of the **Mapxus HSITP** SDK — enabling developers to easily embed Mapxus indoor maps and interactive map views in mobile applications.

---

## 📖 How to Use

1. Install the package. In case of updating the package, please delete your existing node_modules. 
   ```sh
   npm install https://github.com/nauvalrafli/react_hsitp_mapxus_public/releases/download/HSITP_v0.1.2/react-native-mapxus-hsitp-0.1.2.tgz
   ```

2. Import and use the MapxusHsitpView component in your app along with request permission required for the app:
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
         <MapxusHsitpView style={styles.nativeView} />
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
3. Clean gradle
   ```
   cd android && ./gradlew clean && cd ..
   ```
4. If the component is not showing (blank) please check the size assignment.
5. For more detailed information about how to implement please check in folder example   
