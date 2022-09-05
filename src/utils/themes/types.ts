import { ThemedStyledProps } from 'styled-components';

export enum THEME {
  Light = 'Light',
  Dark = 'Dark',
}

export type TTheme = {
  dark: boolean;
  background: string;
  textOnBackground: string;
  primary: string;
  textOnPrimary: string;
  border: string;
  disabled: string;
  highScore: string;
  correctAnswer: string;
  incorrectAnswer: string;
  heartColor: string;
  crossColor: string;
  textOnActiveAnswer: string;
};

export type TThemes = {
  [THEME.Light]: TTheme;
  [THEME.Dark]: TTheme;
};

export type TThemedProps<P> = ThemedStyledProps<P, TTheme>;
