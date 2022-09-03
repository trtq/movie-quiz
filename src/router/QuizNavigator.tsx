import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS, TQuizNavigatorStackParamList } from './types';
import { AboutScreen } from '@src/screens/AboutScreen/AboutScreen';
import { HomeScreen } from '@src/screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator<TQuizNavigatorStackParamList>();

export const QuizNavigator = () => (
  <Stack.Navigator initialRouteName={SCREENS.Home} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.Home} component={HomeScreen} />
    <Stack.Screen name={SCREENS.About} component={AboutScreen} />
  </Stack.Navigator>
);
