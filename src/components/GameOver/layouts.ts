import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { verticalScale } from 'react-native-size-matters/extend';
import { TThemedProps } from '@src/utils/themes/types';

export const QuizWrap = styled(Animated.View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ReplayButton = styled(FontAwesome).attrs((props: TThemedProps<{}>) => ({
  name: 'rotate-right',
  size: verticalScale(120),
  color: props.theme.textOnPrimary,
}))``;

export const ReplayButtonContainer = styled.TouchableOpacity<TThemedProps<{}>>`
  width: ${verticalScale(140)}px;
  height: ${verticalScale(140)}px;
  background-color: ${props => props.theme.highScore};
  border-radius: ${verticalScale(8)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${verticalScale(20)}px;
`;

export const FailText = styled.Text<TThemedProps<{}>>`
  font-size: ${verticalScale(24)}px;
  color: ${props => props.theme.textOnBackground};
  font-weight: 400;
  width: 100%;
  text-align: center;
`;
