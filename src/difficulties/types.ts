export enum DIFFICULTY {
  Easy = 'Easy',
  Normal = 'Normal',
  Hard = 'Hard',
}

export type TDifficulty = {
  years: number;
  pages: number;
  health: number;
  results: number;
};

export type TDifficulties = {
  [DIFFICULTY.Easy]: TDifficulty;
  [DIFFICULTY.Normal]: TDifficulty;
  [DIFFICULTY.Hard]: TDifficulty;
};
