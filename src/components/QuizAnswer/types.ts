import { ReactNode } from 'react';

export type TQuizAnswerProps = {
  onResult?: () => void;
  onFinishAnimation?: () => void;
  correct?: boolean;
  children: ReactNode;
  disabled?: boolean;
  onPressOrCancel?: (val: boolean) => void;
};

export type TResultSheenProps = {
  correct?: boolean;
};
