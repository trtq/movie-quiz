import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { SCREENS } from '../../router/types';
import { useStore } from '../../stores/useStore';
import { THomeScreenProps } from './types';

export const HomeScreen = observer(({ navigation }: THomeScreenProps) => {
  const {
    gameStore: { score, upScore },
  } = useStore();

  return (
    <SafeAreaView>
      <Text>home Screen</Text>
      <Button title="add to score" onPress={upScore} />
      <Text>current score: {score}</Text>
      <Button title="to about screen" onPress={() => navigation.navigate(SCREENS.About)} />
    </SafeAreaView>
  );
});
