import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import { useStore } from '@src/stores/useStore';
import { HealthHeart } from '@src/components/HealthHeart/HealthHeart';
import { DIFFICULTIES } from '@src/difficulties/difficulties';
import { Container, HeartContainer } from './layouts';

// This block shows how much health you have left
// This info is taken from the state
export const Healthbar = observer(() => {
  const {
    gameStore: {
      gameState: { health, difficuty },
    },
  } = useStore();
  const healthMap: boolean[] = useMemo(() => {
    const healthPool: boolean[] = [];
    for (let i = 1; i <= DIFFICULTIES[difficuty].health; i++) {
      healthPool.push(i > health);
    }
    return healthPool;
  }, [health, difficuty]);
  return (
    <Container>
      {healthMap.map((dead, index) => (
        <HeartContainer key={index}>
          <HealthHeart dead={dead} />
        </HeartContainer>
      ))}
    </Container>
  );
});
