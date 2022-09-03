import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { GoBackButton } from '@src/components/GoBackButton/GoBackButton';
import { MenuButton } from '@src/components/MenuButton/MenuButton';
import { SwapThemeButton } from '@src/components/SwapThemeButton/SwapThemeButton';
import { SCREENS } from '@src/router/types';
import { useStore } from '@src/stores/useStore';
import { TDifficultyScreenProps } from './types';
import { Container, SafeWrap, GoBackContainer, TitleText, ButtonWrap, ThemeButtonContainer } from './layouts';
import { DIFFICULTY } from '@src/difficulties/types';

export const DifficultyScreen = observer(({ navigation }: TDifficultyScreenProps) => {
  const {
    gameStore: { changeDifficulty, newGame },
  } = useStore();

  const onPress = useCallback(
    (d: DIFFICULTY) => {
      changeDifficulty(d);
      newGame();
      navigation.navigate(SCREENS.Game);
    },
    [changeDifficulty, navigation, newGame],
  );

  return (
    <Container>
      <SafeAreaView>
        <SafeWrap>
          <GoBackContainer>
            <GoBackButton onPress={() => navigation.pop()} />
          </GoBackContainer>
          <TitleText>Select difficulty</TitleText>
          <ButtonWrap>
            <MenuButton onPress={() => onPress(DIFFICULTY.Easy)}>Easy</MenuButton>
          </ButtonWrap>
          <ButtonWrap>
            <MenuButton onPress={() => onPress(DIFFICULTY.Normal)}>Normal</MenuButton>
          </ButtonWrap>
          <ButtonWrap>
            <MenuButton onPress={() => onPress(DIFFICULTY.Hard)}>Hard</MenuButton>
          </ButtonWrap>
          <ThemeButtonContainer>
            <SwapThemeButton />
          </ThemeButtonContainer>
        </SafeWrap>
      </SafeAreaView>
    </Container>
  );
});
