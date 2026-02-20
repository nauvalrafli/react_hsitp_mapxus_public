# 📌 React Native Mapxus HSITP

A **React Native** integration of the **Mapxus HSITP** SDK — enabling developers to easily embed Mapxus indoor maps and interactive map views in mobile applications.

---

## 📖 How to Use (Start from Version 0.1.13)
1. Install the package. In case of updating the package, please delete your existing node_modules. 
   ```sh
   npm install https://github.com/nauvalrafli/react_hsitp_mapxus_public/releases/download/HSITP_0.1.13/react-native-mapxus-hsitp-0.1.13.tgz
   ```
2. Import and use the MapxusButtonWrapperView component in your app along with request permission required for the app. You can customize the view based on your needs, just wrap it with the component provided.
   
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
3. For iOS: Add camera and location permissions to ios/YourAppName/Info.plist:
   ```
   <key>NSCameraUsageDescription</key>
   <string>This app requires camera access for AR navigation features</string>
   <key>NSLocationWhenInUseUsageDescription</key>
   <string>This app requires location access to show your position on the map</string>
   <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
   <string>This app requires location access to show your position on the map</string>
   ```
4. Add these lines on android/build.gradle
   ```
   allprojects {
     repositories {
       maven {
         // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
         url(reactNativeAndroidDir)
       }
   
       google()
       mavenCentral()
       maven { url 'https://www.jitpack.io' }

       // Add the block below on the existing repositories
       maven {                  
         name = "MapxusRelease"
         url = providers.gradleProperty("MAPXUS_RELEASE_URL").get()
         allowInsecureProtocol = true
         credentials {
             username = providers.gradleProperty("MAPXUS_RELEASE_USERNAME").get()
             password = providers.gradleProperty("MAPXUS_RELEASE_PASSWORD").get()
         }
       }
     }
   }
   ```
5. Add the credentials on android/gradle.properties
   ```
   MAPXUS_RELEASE_URL=https://nexus3.mapxus.com/repository/mapxus-releases
   MAPXUS_RELEASE_USERNAME=4uGBjGYX
   MAPXUS_RELEASE_PASSWORD=NqTDm1UiCihOdus3
   ```
6. **Change minimumSdk of your project to 26**
7. Add an xml file in android/app/src/main/res/xml/[name].xml (name is flexible).
   ```
   <?xml version="1.0" encoding="utf-8"?>
   <network-security-config>
     <domain-config cleartextTrafficPermitted="true">
       <domain includeSubdomains="true">appapi-uat.hsitp.local</domain>
     </domain-config>
   </network-security-config>
   ```
8. Apply it to application networkSecurityConfig to register the local url. You can do this inside the android folder's Android Manifest
   ```
   <application android:name=".MainApplication" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:roundIcon="@mipmap/ic_launcher_round" android:allowBackup="true" android:theme="@style/AppTheme" android:supportsRtl="true"
    android:networkSecurityConfig="@xml/network" //add this
     >
   ```
   You can refer to this folder tree
   ```
   your-project-root/
      ├── android/
      │   └── app/
      │       └── src/
      │           └── main/
      │               ├── res/
      │               │   ├── xml/
      │               │   │   └── network_security_config.xml  <-- (Custom XMLs)
      │               │   ├── values/
      │               │   │   └── strings.xml                  <-- (Text/Strings)
      │               │   └── drawable/
      │               │       └── splash_screen.xml            <-- (Vector/Images)
      │               └── AndroidManifest.xml                  <-- (App Manifest)
      ├── ios/
      ├── src/
      └── package.json
   ```
9. For more detailed information about how to implement please check in folder ModuleApplication

### Notes:
- For iOS development, if you have issues on build saying multiple commands produce the same assets, please run these in the terminal in the root folder of your application.
```
#Remove existing build
rm -rf ~/Library/Developer/Xcode/DerivedData

#Restart pods by reinstalling
cd ios
bundle exec pod deintegrate
bundle exec pod install
```

## 📖 How to Use (Up to Version 0.1.12)

1. Install the package. In case of updating the package, please delete your existing node_modules. 
   ```sh
   npm install https://github.com/nauvalrafli/react_hsitp_mapxus_public/releases/download/HSITP_v0.1.6/react-native-mapxus-hsitp-0.1.6.tgz
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
3. Make sure to use Material Theme for your apps/activity.
   Recommended Theme:
   ```
   android:theme="@style/Theme.Material3.Light.NoActionBar"
   ```
5. Clean gradle
   ```
   cd android && ./gradlew clean && cd ..
   ```
6. If the component is not showing (blank) please check the size assignment.
7. For more detailed information about how to implement please check in folder ModuleApplication (Check for older version)   
