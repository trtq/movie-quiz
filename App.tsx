import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QuizNavigator } from './src/router/QuizNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <QuizNavigator />
    </NavigationContainer>
  );
}
