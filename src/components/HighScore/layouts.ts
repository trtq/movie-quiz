import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters/extend';
import { TThemedProps } from '@src/utils/themes/types';

export const Container = styled.View`
  flex-direction: row;
`;

export const LeftHalf = styled.Text<TThemedProps<{ gold: boolean }>>`
  text-align: right;
  color: ${props => (props.gold ? props.theme.highScore : props.theme.textOnBackground)};
  font-size: ${scale(25)}px;
  margin-right: ${scale(-10)}px;
  padding-right: ${scale(6)}px;
`;

export const Divider = styled.Text<TThemedProps<{ gold: boolean }>>`
  color: ${props => (props.gold ? props.theme.highScore : props.theme.textOnBackground)};
  font-size: ${scale(25)}px;
  margin-top: ${scale(7)}px;
  margin-right: ${scale(-4)}px;
  transform: rotate(30deg);
`;

export const RightHalf = styled.Text<TThemedProps<{}>>`
  color: ${props => props.theme.highScore};
  font-size: ${scale(18)}px;
  margin-top: ${scale(22)}px;
`;
