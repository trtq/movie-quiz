import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QuizNavigator } from './src/router/QuizNavigator';
import { StoreProvider } from './src/stores/StoreProvider';
import { SettingsProvider } from './src/components/SettingsProvider/SettingsProvider';

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <SettingsProvider>
          <QuizNavigator />
        </SettingsProvider>
      </NavigationContainer>
    </StoreProvider>
  );
}
