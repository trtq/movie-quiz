import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS, TQuizNavigatorStackParamList } from './types';
import { AboutScreen } from '@src/screens/AboutScreen/AboutScreen';
import { HomeScreen } from '@src/screens/HomeScreen/HomeScreen';
import { DifficultyScreen } from '@src/screens/DifficultyScreen/DifficultyScreen';
import { GameScreen } from '@src/screens/GameScreen/GameScreen';

const Stack = createNativeStackNavigator<TQuizNavigatorStackParamList>();

export const QuizNavigator = () => (
  <Stack.Navigator initialRouteName={SCREENS.Home} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.Home} component={HomeScreen} />
    <Stack.Screen name={SCREENS.About} component={AboutScreen} />
    <Stack.Screen name={SCREENS.Difficulty} component={DifficultyScreen} />
    <Stack.Screen name={SCREENS.Game} component={GameScreen} />
  </Stack.Navigator>
);
