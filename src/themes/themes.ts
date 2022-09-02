import { THEME, TThemes } from './types';

export const themes: TThemes = {
  [THEME.Light]: {
    dark: false,
    background: '#f1f1ff',
  },
  [THEME.Dark]: {
    dark: true,
    background: '#00043d',
  },
};
