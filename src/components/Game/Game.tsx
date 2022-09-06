import { useStore } from '@src/stores/useStore';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useState } from 'react';
import { GameOver } from '../GameOver/GameOver';
import { Loading } from '../Loading/Loading';
import { QuizQuestion } from '../QuizQuestion/QuizQuestion';
import { TGameProps } from './types';

const answerWaitDuration = 1500;

// Component that actually runs the game - gets new questions, checks scores and governs health
// shows loading, the game over block or a question, depending on the current state of the game
export const Game = observer(({ onHome }: TGameProps) => {
  const {
    gameStore: {
      gameState: { question, health },
      recieveDamage,
      upScore,
      loadNextQuestion,
      newGame,
      numberOfLoads,
      cleanUpLoadingQuestions,
    },
  } = useStore();

  // if true substitutes a question for a game over screen
  const [isGameOver, setIsGameOver] = useState(false);
  // used for animation to show a ⨉ or ✓ mark once the answer is locked
  const [showAnswerFor, setShowAnswerFor] = useState(0);

  const [reactionTimeout, setReactionTimeout] = useState<null | ReturnType<typeof setTimeout>>(null);
  // triggers when the answer is locked in, deals with the results and sets up loading of the new question
  const onAnswer = useCallback(
    (correct: boolean) => {
      const savedHealth = health;
      if (!correct) {
        recieveDamage();
      } else {
        upScore();
      }
      if (question) {
        setShowAnswerFor(question?.id);
      }
      setReactionTimeout(
        setTimeout(() => {
          loadNextQuestion();
          if (!correct && savedHealth <= 1) {
            setIsGameOver(true);
          }
        }, answerWaitDuration),
      );
    },
    [health, loadNextQuestion, question, recieveDamage, upScore],
  );

  // triggers on the press of a replay button on a game over screen
  // resets animations and triggers newGame() wich resets the state too
  const [restartTimeout, setRestartTimeout] = useState<null | ReturnType<typeof setTimeout>>(null);
  const [afterLossLoad, setAfterLossLoad] = useState(false);
  const onRestart = useCallback(() => {
    setAfterLossLoad(true);
    setIsGameOver(false);
    newGame();
    setRestartTimeout(setTimeout(() => setAfterLossLoad(false), 1000));
  }, [newGame]);

  // here we ensure that all the calls get cleaned up when we leave this screen
  useEffect(() => {
    return () => {
      if (reactionTimeout) clearTimeout(reactionTimeout);
      if (restartTimeout) clearTimeout(restartTimeout);
      cleanUpLoadingQuestions();
    };
  }, [cleanUpLoadingQuestions, reactionTimeout, restartTimeout]);

  if (isGameOver) return <GameOver onRestart={onRestart} />;

  if (!question || afterLossLoad) return <Loading showError={numberOfLoads > 5} onAbandon={onHome} />;

  return (
    <QuizQuestion
      key={question.id}
      question={question}
      showAnswer={showAnswerFor === question.id}
      onAnswer={onAnswer}
    />
  );
});
