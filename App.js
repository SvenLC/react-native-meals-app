import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import MealsNavigator from './navigation/MealsNavigator';

export default function App() {
  let [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <MealsNavigator />;
  }
}
