# 📌 React Native Mapxus HSITP

A **React Native** integration of the **Mapxus HSITP** SDK — enabling developers to easily embed Mapxus indoor maps and interactive map views in mobile applications.

---

## 📖 How to Use

1. Install the package:
   ```sh
   npm install https://github.com/nauvalrafli/react_hsitp_mapxus_public/releases/download/Hsitp/react-native-mapxus-hsitp-0.1.0.tgz
   ```

2. Import and use the MapxusHsitpView component in your app:
   ```js
   import React from 'react';
   import { View, StyleSheet } from 'react-native';
   import MapxusHsitpView from 'react-native-mapxus-hsitp';

   export default function App() {
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
       width: 300,
       height: 300,
     },
   });
   ```
