import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters/extend';
import { TThemedProps } from '@src/utils/themes/types';

export const Button = styled.TouchableOpacity<TThemedProps<{ disabled: boolean }>>`
  width: ${scale(240)}px;
  height: ${scale(60)}px;
  border-radius: ${scale(8)}px;
  background: ${props => (props.disabled ? props.theme.disabled : props.theme.primary)};
  border: ${scale(2)}px solid ${props => props.theme.border};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<TThemedProps<{}>>`
  font-size: ${scale(19)}px;
  color: ${props => props.theme.textOnPrimary};
  font-weight: 400;
  width: 100%;
  text-align: center;
`;
