import { DIFFICULTY, TDifficulties } from './types';

export const DIFFICULTIES: TDifficulties = {
  [DIFFICULTY.Easy]: {
    years: 15,
    pages: 3,
    health: 4,
    results: 3,
  },
  [DIFFICULTY.Normal]: {
    years: 20,
    pages: 5,
    health: 3,
    results: 4,
  },
  [DIFFICULTY.Hard]: {
    years: 25,
    pages: 7,
    health: 2,
    results: 4,
  },
};
