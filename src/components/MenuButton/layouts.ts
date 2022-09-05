import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters/extend';
import { TThemedProps } from '@src/utils/themes/types';

export const Button = styled.TouchableOpacity<TThemedProps<{ disabled: boolean }>>`
  width: ${scale(240)}px;
  height: ${scale(60)}px;
  border-radius: ${scale(8)}px;
  background: ${props => (props.disabled ? props.theme.disabled : props.theme.primary)};
  border: ${scale(1)}px solid ${props => props.theme.border};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  justify-content: center;
  align-items: center;
  elevation: 5;
  shadow-color: ${props => (props.disabled ? props.theme.disabled : props.theme.textOnBackground)};
  shadow-opacity: ${scale(0.35)};
  shadow-radius: ${scale(3.84)}px;
  shadow-offset: 0px ${scale(3)}px;
`;

export const ButtonText = styled.Text<TThemedProps<{}>>`
  font-size: ${scale(19)}px;
  color: ${props => props.theme.textOnPrimary};
  font-weight: 400;
  width: 100%;
  text-align: center;
`;
