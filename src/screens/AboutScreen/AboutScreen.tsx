import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { useStore } from '../../stores/useStore';
import { TAboutScreenProps } from './types';

export const AboutScreen = observer(({ navigation }: TAboutScreenProps) => {
  const {
    gameStore: {
      gameState: { score },
      upScore,
    },
  } = useStore();

  return (
    <SafeAreaView>
      <Text>about Screen</Text>
      <Button title="add to score" onPress={upScore} />
      <Text>current score: {score}</Text>
      <Button title="go back" onPress={navigation.goBack} />
    </SafeAreaView>
  );
});
