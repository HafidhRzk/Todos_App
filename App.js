import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
} from '@expo-google-fonts/balsamiq-sans';

import Container from './Container';

export default function App() {

  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
  });

  const fontConfig = {
    BalsamiqSans: {
      400: {
        normal: 'BalsamiqSans_400Regular',
        italic: 'BalsamiqSans_400Regular_Italic',
      },
    },
  };

  const customeColor = {
    error: {
      50: '#fef2f2',
      300: '#fca5a5',
      500: '#ef4444',
      800: '#991b1b',
    },
  };

  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    fonts: {
      header: 'BalsamiqSans',
      body: 'BalsamiqSans',
      mono: 'BalsamiqSans',
    },
    config: { initialColorMode: 'dark' },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}
