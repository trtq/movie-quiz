import AsyncStorage from '@react-native-async-storage/async-storage';
import { runInAction } from 'mobx';
import { DIFFICULTY } from '@src/utils/difficulties/types';
import { DIFFICULTIES } from '@src/utils/difficulties/difficulties';
import { THEME } from '@src/utils/themes/types';
import { TGameState } from './types';
import { TQuestion } from '@src/screens/GameScreen/types';
import { generateQuestion } from '@src/utils/generateQuestion';
import FastImage from 'react-native-fast-image';
import { PICTURE_URL_ROOT } from '@env';

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
      this.aborter = new AbortController();
      const newSettings = JSON.stringify(this.gameState);
      AsyncStorage.setItem('gameState', newSettings).catch(e => {
        console.log('could not write in async storage', e);
      });
      this.loadQuestion();
    },

    numberOfLoads: 0,
    loadTimer: null as ReturnType<typeof setTimeout> | null,
    aborter: new AbortController(),
    // this downloads a question. If we currently already show a question on the screen, it saves it for later
    // if we don't it puts it straight on the screen
    loadQuestion() {
      const { difficuty } = this.gameState;
      generateQuestion(difficuty)
        .then(value => {
          runInAction(() => {
            if (value?.id) {
              this.numberOfLoads = 0;
              if (this.gameState.question) {
                this.gameState.nextQuestion = value;
                FastImage.preload([{ uri: `${PICTURE_URL_ROOT}${value.picture}` }]);
                this.saveCurrentSettings(true);
              } else {
                this.gameState.question = value;
                this.saveCurrentSettings(true);
                this.loadQuestion();
              }
            } else {
              if (!this?.aborter?.signal?.aborted) {
                this.loadTimer = setTimeout(() => {
                  runInAction(() => {
                    // once numberOfLoads hits a certain threashold we tell the user that something is probably broken
                    this.numberOfLoads++;
                    this.loadQuestion();
                  });
                }, 2000);
              }
            }
          });
        })
        .catch(() => {
          if (!this?.aborter?.signal?.aborted) {
            runInAction(() => {
              this.loadTimer = setTimeout(() => {
                runInAction(() => {
                  this.numberOfLoads++;
                  this.loadQuestion();
                });
              }, 2000);
            });
          }
        });
    },

    // either puts a preloaded question onto the screen, or removes all questions at all (and shows loading screen)
    loadNextQuestion() {
      if (this.gameState.nextQuestion) {
        this.gameState.question = this.gameState.nextQuestion;
        this.gameState.nextQuestion = null;
        this.saveCurrentSettings();
      } else {
        this.gameState.question = null;
      }
      this.aborter = new AbortController();
      this.loadQuestion();
    },

    // cleans up the loop in loadQuestion. called in <Game /> on unmount
    cleanUpLoadingQuestions() {
      this.numberOfLoads = 0;
      if (this.loadTimer) {
        clearTimeout(this.loadTimer);
      }
      this.aborter.abort();
    },
  };
}

export type TGameStore = ReturnType<typeof createGameStore>;
