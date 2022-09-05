import { TQuestion } from '@src/screens/GameScreen/types';
import { DIFFICULTY } from '@src/utils/difficulties/types';
import { THEME } from '@src/utils/themes/types';

export type TGameState = {
  question: TQuestion | null;
  nextQuestion: TQuestion | null;
  difficuty: DIFFICULTY;
  health: number;
  score: number;
  highScore: number;
  continuable: boolean;
  theme: THEME;
};
