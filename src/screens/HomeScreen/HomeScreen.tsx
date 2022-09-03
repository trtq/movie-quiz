import { observer } from 'mobx-react-lite';
import React from 'react';
import { SCREENS } from '@src/router/types';
import { useStore } from '@src/stores/useStore';
import { BackgroundImage, Container, ContGameContainer, Logo, SafeWrap, ThemeButtonContainer } from './layouts';
import { THomeScreenProps } from './types';
import { SafeAreaView } from 'react-native';
import { SwapThemeButton } from '@src/components/SwapThemeButton/SwapThemeButton';
import { MenuButton } from '@src/components/MenuButton/MenuButton';

export const HomeScreen = observer(({ navigation }: THomeScreenProps) => {
  const {
    gameStore: {
      gameState: { continuable },
    },
  } = useStore();

  return (
    <Container>
      <BackgroundImage />
      <SafeAreaView>
        <SafeWrap>
          <Logo />
          <ContGameContainer>
            <MenuButton disabled={!continuable} onPress={() => navigation.navigate(SCREENS.Game)}>
              Continue
            </MenuButton>
          </ContGameContainer>
          <ContGameContainer>
            <MenuButton onPress={() => navigation.navigate(SCREENS.Difficulty)}>New game</MenuButton>
          </ContGameContainer>
          <MenuButton onPress={() => navigation.navigate(SCREENS.About)}>About</MenuButton>
          <ThemeButtonContainer>
            <SwapThemeButton />
          </ThemeButtonContainer>
        </SafeWrap>
      </SafeAreaView>
    </Container>
  );
});
