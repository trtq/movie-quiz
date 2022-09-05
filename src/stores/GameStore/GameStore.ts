import AsyncStorage from '@react-native-async-storage/async-storage';
import { runInAction } from 'mobx';
import { DIFFICULTY } from '@src/utils/difficulties/types';
import { DIFFICULTIES } from '@src/utils/difficulties/difficulties';
import { THEME } from '@src/utils/themes/types';
import { TGameState } from './types';
import { TQuestion } from '@src/screens/GameScreen/types';

export function createGameStore() {
  return {
    gameState: {
      question: null,
      nextQuestion: null,
      difficuty: DIFFICULTY.Normal,
      health: DIFFICULTIES[DIFFICULTY.Normal].health,
      score: 0,
      highScore: 0,
      continuable: false,
      theme: THEME.Light,
    } as TGameState,

    setQuestion(q: TQuestion | null) {
      this.gameState.question = q;
      this.saveCurrentSettings(true);
    },

    setNextQuestion(q: TQuestion | null) {
      this.gameState.nextQuestion = q;
      this.saveCurrentSettings();
    },

    changeDifficulty(d: DIFFICULTY) {
      this.gameState.difficuty = d;
      this.saveCurrentSettings();
    },

    swapQuestions() {
      this.gameState.question = this.gameState.nextQuestion;
      this.gameState.nextQuestion = null;
      this.saveCurrentSettings();
    },

    recieveDamage() {
      this.gameState.health--;
      this.saveCurrentSettings(true);
    },

    upScore() {
      this.gameState.score++;
      if (this.gameState.score > this.gameState.highScore) {
        this.gameState.highScore = this.gameState.score;
      }
      this.saveCurrentSettings();
    },

    swapTheme() {
      this.gameState.theme = this.gameState.theme === THEME.Dark ? THEME.Light : THEME.Dark;
      this.saveCurrentSettings();
    },

    readAndApplySettings() {
      // called in <SettingsProvider />. when the app starts, reads the state from AsyncStorage and pushes it into state
      AsyncStorage.getItem('gameState')
        .then(res => {
          if (res) {
            runInAction(() => {
              this.gameState = JSON.parse(res);
            });
          }
        })
        .catch(e => {
          console.log('could not read async storage', e);
        });
    },

    saveCurrentSettings(continuableNow?: boolean) {
      // serialises and saves the game state to async storage
      // because we want the ability to continue at any point without explicit saving by the user, this is called a lot
      if (continuableNow) {
        this.gameState.continuable = true;
      }
      const newSettings = JSON.stringify(this.gameState);
      AsyncStorage.setItem('gameState', newSettings).catch(e => {
        console.log('could not write in async storage', e);
      });
    },

    newGame() {
      // resets all fields that don't save between different games
      this.gameState = {
        question: null,
        nextQuestion: null,
        difficuty: this.gameState.difficuty,
        health: DIFFICULTIES[this.gameState.difficuty].health,
        score: 0,
        highScore: this.gameState.highScore,
        continuable: false,
        theme: this.gameState.theme,
      };
      const newSettings = JSON.stringify(this.gameState);
      AsyncStorage.setItem('gameState', newSettings).catch(e => {
        console.log('could not write in async storage', e);
      });
    },
  };
}

export type TGameStore = ReturnType<typeof createGameStore>;
