import React from 'react';
import { TouchableOpacity } from 'react-native';
import { GoBackMark } from './layouts';
import { TGoBackButtonProps } from './types';

// a button to go back a screen (or go back to home)
// very simple, but used a lot throughout the project
export const GoBackButton = ({ onPress }: TGoBackButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <GoBackMark />
  </TouchableOpacity>
);
