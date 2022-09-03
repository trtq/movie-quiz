import { THEME, TThemes } from './types';

export const themes: TThemes = {
  [THEME.Light]: {
    dark: false,
    background: '#f1f1ff',
    textOnBackground: '#010111',
    primary: '#e6e8ff',
    textOnPrimary: '#010111',
    border: '#c9c9ff',
    disabled: '#737478',
    highScore: '#927b00',
    correctAnswer: '#11bd0d',
    incorrectAnswer: '#d10707',
    heartColor: '#d70083',
    crossColor: '#d70000',
  },
  [THEME.Dark]: {
    dark: true,
    background: '#00043d',
    textOnBackground: '#f6f6ff',
    primary: '#f6f6ff',
    textOnPrimary: '#010111',
    border: '#010111',
    disabled: '#737478',
    highScore: 'gold',
    correctAnswer: '#11bd0d',
    incorrectAnswer: '#d10707',
    heartColor: '#d70083',
    crossColor: '#d70000',
  },
};
