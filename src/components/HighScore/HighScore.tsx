import { useStore } from '@src/stores/useStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Container, Divider, LeftHalf, RightHalf } from './layouts';

// shows current score and highscore, takes this information from the state
export const HighScore = observer(() => {
  const {
    gameStore: {
      gameState: { score, highScore },
    },
  } = useStore();
  return (
    <Container>
      <LeftHalf gold={score >= highScore}>{score} </LeftHalf>
      <Divider gold={score >= highScore}> | </Divider>
      <RightHalf>{highScore}</RightHalf>
    </Container>
  );
});
