import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QuizNavigator } from './src/router/QuizNavigator';
import { StoreProvider } from './src/stores/StoreProvider';

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <QuizNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
}
