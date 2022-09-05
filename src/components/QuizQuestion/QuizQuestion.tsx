import { PICTURE_URL_ROOT } from '@env';
import React, { useCallback, useState } from 'react';
import { FadeIn, FadeOut, RotateInUpRight } from 'react-native-reanimated';
import { QuizAnswer } from '../QuizAnswer/QuizAnswer';
import { TQuizQuestionProps } from './types';
import {
  AnswerText,
  AnswerTextContainer,
  MovieCard,
  MovieCardImage,
  QuestionText,
  QuizWrap,
  ResultMark,
} from './layouts';

// question info gets provided by Game, this component renders it and reacts to player input
export const QuizQuestion = ({ question, showAnswer, onAnswer }: TQuizQuestionProps) => {
  // used for disabling answer buttons once the answer is locked in
  const [isAnswerGiven, setIsAnswerGiven] = useState(false);
  // depending on this you get ⨉ or ✓ once the answer is locked
  const [wasAnswerCorrect, setWasAnswerCorrect] = useState(false);

  const onAnswerLocal = useCallback(
    (correct: boolean) => {
      onAnswer(correct);
      setWasAnswerCorrect(correct);
    },
    [onAnswer],
  );

  return (
    <QuizWrap entering={FadeIn.delay(300).duration(300)} exiting={FadeOut.duration(300)}>
      <QuestionText>What is the name of this movie?</QuestionText>
      <MovieCard>
        <MovieCardImage source={{ uri: `${PICTURE_URL_ROOT}${question.picture}` }} />
        <AnswerTextContainer>
          {showAnswer && (
            <AnswerText entering={FadeIn.duration(300)} exiting={FadeOut.duration(300)}>
              {question.correctName}
            </AnswerText>
          )}
        </AnswerTextContainer>
        {showAnswer && (
          <ResultMark
            correct={wasAnswerCorrect}
            entering={RotateInUpRight.duration(300)}
            exiting={FadeOut.delay(300).duration(300)}
          />
        )}
      </MovieCard>
      {question.answers.map(answer => (
        <QuizAnswer
          key={answer.id}
          onPressOrCancel={setIsAnswerGiven}
          onResult={() => onAnswerLocal(answer.correct)}
          correct={answer.correct}
          disabled={isAnswerGiven}>
          {answer.name}
        </QuizAnswer>
      ))}
    </QuizWrap>
  );
};
