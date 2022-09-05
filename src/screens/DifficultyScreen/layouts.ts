import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters/extend';
import { TThemedProps } from '@src/utils/themes/types';

export const Container = styled.View<TThemedProps<{}>>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
`;

export const SafeWrap = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ThemeButtonContainer = styled.TouchableOpacity<TThemedProps<{}>>`
  position: absolute;
  bottom: ${verticalScale(16)}px;
  left: ${scale(28)}px;
`;

export const TitleText = styled.Text<TThemedProps<{}>>`
  font-size: ${verticalScale(24)}px;
  color: ${props => props.theme.textOnBackground};
  font-weight: 400;
  width: 100%;
  text-align: center;
`;
export const ButtonWrap = styled.View`
  margin-top: ${verticalScale(20)}px;
`;

export const GoBackContainer = styled.View`
  position: absolute;
  top: ${verticalScale(13)}px;
  left: ${scale(30)}px;
`;
