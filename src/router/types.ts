export enum SCREENS {
  Home = 'Home',
  Game = 'Game',
  Difficulty = 'Difficulty',
  About = 'About',
}

export type TQuizNavigatorStackParamList = {
  [SCREENS.Home]: undefined;
  [SCREENS.Game]: undefined;
  [SCREENS.Difficulty]: undefined;
  [SCREENS.About]: undefined;
};
