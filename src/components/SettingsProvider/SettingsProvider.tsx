import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import { useStore } from '@src/stores/useStore';
import { themes } from '@src/utils/themes/themes';
import { ThemeProvider } from 'styled-components';
import { THEME } from '@src/utils/themes/types';

// a wrapper that reads AsyncStorage info at the point of entrance
// sets up the StatusBar color for androids
// and feeds ThemeProvider with a theme that it gets from the state
export const SettingsProvider = observer(({ children }: { children: React.ReactNode }) => {
  const {
    gameStore: {
      readAndApplySettings,
      gameState: { theme },
    },
  } = useStore();

  useEffect(readAndApplySettings, [readAndApplySettings]);
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(themes[theme].background);
      if (theme === THEME.Dark) {
        StatusBar.setBarStyle('light-content');
      } else {
        StatusBar.setBarStyle('dark-content');
      }
    }
  }, [theme]);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
});
