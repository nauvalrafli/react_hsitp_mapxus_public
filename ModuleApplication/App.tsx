/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { MapxusButtonWrapperView, MapxusHsitpView } from 'react-native-mapxus-hsitp';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }
    ]}>
      <MapxusButtonWrapperView>
        <Text>Open Map</Text>
      </MapxusButtonWrapperView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  mapxus: {
    flex: 1
  }
});

export default App;
