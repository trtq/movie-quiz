import { DIFFICULTY } from '@src/utils/difficulties/types';
import { THEME } from '@src/utils/themes/types';

export type TGameState = {
  score: number;
  theme: THEME;
  continuable: boolean;
  difficuty: DIFFICULTY;
  highScore: number;
  health: number;
};
