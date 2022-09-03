import AsyncStorage from '@react-native-async-storage/async-storage';
import { runInAction } from 'mobx';
import { DIFFICULTY } from '@src/difficulties/types';
import { DIFFICULTIES } from '@src/difficulties/difficulties';
import { THEME } from '@src/themes/types';
import { TGameState } from './types';

export function createGameStore() {
  return {
    gameState: {
      score: 0,
      continuable: false,
      theme: THEME.Light,
      difficuty: DIFFICULTY.Normal,
      health: DIFFICULTIES[DIFFICULTY.Normal].health,
      highScore: 0,
    } as TGameState,

    upScore() {
      this.gameState.score++;
      if (this.gameState.score > this.gameState.highScore) {
        this.gameState.highScore = this.gameState.score;
      }
      this.saveCurrentSettings();
    },

    changeDifficulty(d: DIFFICULTY) {
      this.gameState.difficuty = d;
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

    recieveDamage() {
      this.gameState.health--;
      this.saveCurrentSettings(true);
    },

    newGame() {
      // resets all fields that don't save between different games
      this.gameState = {
        difficuty: this.gameState.difficuty,
        score: 0,
        continuable: false,
        theme: this.gameState.theme,
        highScore: this.gameState.highScore,
        health: DIFFICULTIES[this.gameState.difficuty].health,
      };
      const newSettings = JSON.stringify(this.gameState);
      AsyncStorage.setItem('gameState', newSettings).catch(e => {
        console.log('could not write in async storage', e);
      });
    },

    swapTheme() {
      this.gameState.theme = this.gameState.theme === THEME.Dark ? THEME.Light : THEME.Dark;
      this.saveCurrentSettings();
    },
  };
}

export type TGameStore = ReturnType<typeof createGameStore>;
