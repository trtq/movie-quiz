import React from 'react';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { QuizWrap, FailText, ReplayButtonContainer, ReplayButton } from './layouts';
import { TGameOverProps } from './types';

// game over block. Just styles.
export const GameOver = ({ onRestart }: TGameOverProps) => {
  return (
    <QuizWrap entering={FadeIn.delay(300).duration(300)} exiting={FadeOut.duration(300)}>
      <FailText>GAME OVER!</FailText>
      <ReplayButtonContainer onPress={onRestart}>
        <ReplayButton />
      </ReplayButtonContainer>
    </QuizWrap>
  );
};
