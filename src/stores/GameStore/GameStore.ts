export function createGameStore() {
  return {
    score: 0,

    upScore() {
      this.score++;
    },
  };
}

export type TGameStore = ReturnType<typeof createGameStore>;
