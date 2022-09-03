import { useStore } from '@src/stores/useStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ThemeButton, ThemeButtonContainer } from './layouts';

// a button that swaps the theme from light to dark and vice versa
export const SwapThemeButton = observer(() => {
  const {
    gameStore: { swapTheme },
  } = useStore();
  return (
    <ThemeButtonContainer onPress={swapTheme}>
      <ThemeButton />
    </ThemeButtonContainer>
  );
});
