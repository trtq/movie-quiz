import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { TAboutScreenProps } from './types';

export const AboutScreen = ({ navigation }: TAboutScreenProps) => (
  <SafeAreaView>
    <Text>about Screen</Text>
    <Button title="go back" onPress={navigation.goBack} />
  </SafeAreaView>
);
