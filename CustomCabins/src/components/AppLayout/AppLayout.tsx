import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from '@Navigator';
import { StatusBar } from 'expo-status-bar';
import { TranslationProvider } from '@Lang/TranslationProvider';

const AppLayout = () => {
  return (
    <TranslationProvider activeLanguage='pl'>
      <NavigationContainer>
        <Navigator />
        <StatusBar style='auto' />
      </NavigationContainer>
    </TranslationProvider>
  );
};

export default AppLayout;
