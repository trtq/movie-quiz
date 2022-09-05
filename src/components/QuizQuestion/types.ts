import { TQuestion } from '@src/screens/GameScreen/types';

export type TQuizQuestionProps = {
  question: TQuestion;
  showAnswer: boolean;
  onAnswer: (correct: boolean) => void;
};
