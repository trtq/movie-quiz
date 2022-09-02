import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { SCREENS } from '../../router/types';
import { THomeScreenProps } from './types';

export const HomeScreen = ({ navigation }: THomeScreenProps) => (
  <SafeAreaView>
    <Text>home Screen</Text>
    <Button title="to about screen" onPress={() => navigation.navigate(SCREENS.About)} />
  </SafeAreaView>
);
