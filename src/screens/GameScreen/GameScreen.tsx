import React from 'react';
import { SafeAreaView } from 'react-native';
import { GoBackButton } from '@src/components/GoBackButton/GoBackButton';
import { HighScore } from '@src/components/HighScore/HighScore';
import { SwapThemeButton } from '@src/components/SwapThemeButton/SwapThemeButton';
import { Healthbar } from '@src/components/HealthBar/HealthBar';
import { SCREENS } from '@src/router/types';
import { Game } from '@src/components/Game/Game';
import { TGameScreenProps } from './types';
import {
  Container,
  BackgroundImage,
  SafeWrap,
  GoBackContainer,
  ThemeButtonContainer,
  HighScoreContainer,
  HealthbarContainer,
} from './layouts';

// the screen with the actual game. Main screen in turns of functionality.
// this shows interface and calls <Game /> wich is a component that actually governs the state of the game
export const GameScreen = ({ navigation }: TGameScreenProps) => {
  return (
    <Container>
      <BackgroundImage />
      <SafeAreaView>
        <SafeWrap>
          <Game onHome={() => navigation.navigate(SCREENS.Home)} />
          <GoBackContainer>
            <GoBackButton onPress={() => navigation.navigate(SCREENS.Home)} />
          </GoBackContainer>
          <HealthbarContainer>
            <Healthbar />
          </HealthbarContainer>
          <HighScoreContainer>
            <HighScore />
          </HighScoreContainer>
          <ThemeButtonContainer>
            <SwapThemeButton />
          </ThemeButtonContainer>
        </SafeWrap>
      </SafeAreaView>
    </Container>
  );
};
