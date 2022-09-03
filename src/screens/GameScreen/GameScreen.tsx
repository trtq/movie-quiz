import { observer } from 'mobx-react-lite';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { GoBackButton } from '@src/components/GoBackButton/GoBackButton';
import { HighScore } from '@src/components/HighScore/HighScore';
import { SwapThemeButton } from '@src/components/SwapThemeButton/SwapThemeButton';
import { Healthbar } from '@src/components/HealthBar/HealthBar';
import { SCREENS } from '@src/router/types';
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

export const GameScreen = observer(({ navigation }: TGameScreenProps) => {
  return (
    <Container>
      <BackgroundImage />
      <SafeAreaView>
        <SafeWrap>
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
});
