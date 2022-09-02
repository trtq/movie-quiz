import { ThemedStyledProps } from 'styled-components';

export enum THEME {
  Light = 'Light',
  Dark = 'Dark',
}

export type TTheme = {
  dark: boolean;
  background: string;
};

export type TThemes = {
  [THEME.Light]: TTheme;
  [THEME.Dark]: TTheme;
};

export type TThemedProps<P> = ThemedStyledProps<P, TTheme>;
