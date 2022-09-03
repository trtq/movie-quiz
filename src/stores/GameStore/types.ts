import { DIFFICULTY } from '@src/difficulties/types';
import { THEME } from '@src/themes/types';

export type TGameState = {
  score: number;
  theme: THEME;
  continuable: boolean;
  difficuty: DIFFICULTY;
};
