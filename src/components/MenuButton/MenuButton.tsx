import React from 'react';
import { Button, ButtonText } from './layouts';
import { TMenuButtonProps } from './types';

// a button
export const MenuButton = ({ onPress, children, disabled }: TMenuButtonProps) => {
  return (
    <Button disabled={!!disabled} onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};
