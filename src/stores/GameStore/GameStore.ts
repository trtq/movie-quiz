import AsyncStorage from '@react-native-async-storage/async-storage';
import { runInAction } from 'mobx';
import { THEME } from '@src/themes/types';
import { TGameState } from './types';

export function createGameStore() {
  return {
    gameState: {
      score: 0,
      continuable: false,
      theme: THEME.Light,
    } as TGameState,

    upScore() {
      this.gameState.score++;
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

    swapTheme() {
      this.gameState.theme = this.gameState.theme === THEME.Dark ? THEME.Light : THEME.Dark;
      this.saveCurrentSettings();
    },
  };
}

export type TGameStore = ReturnType<typeof createGameStore>;
