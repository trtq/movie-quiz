import { ReactNode } from 'react';

export type TMenuButtonProps = {
  onPress: () => void;
  children: ReactNode;
  disabled?: boolean;
};
