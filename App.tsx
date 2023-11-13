import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Switch } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/Colors';
import  Button  from "./src/components/Button" ;
import MyKeyborad from './src/components/MyKeyboard';

export default function App() {
   const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value ={theme}>
    <SafeAreaProvider style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
      <StatusBar style="auto" />
      <Switch
        value={theme === 'light'}
        onValueChange={() => setTheme(theme ===  'light' ? 'dark': 'light')}
      />
      <MyKeyborad />
    </SafeAreaProvider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
