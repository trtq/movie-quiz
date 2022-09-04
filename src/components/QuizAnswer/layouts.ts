import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { scale, verticalScale } from 'react-native-size-matters/extend';
import Svg from 'react-native-svg';
import { TThemedProps } from '@src/themes/types';
import { TResultSheenProps } from './types';

const answerWidth = Math.min(verticalScale(358), scale(358));
const answerHeight = verticalScale(65);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export const ResultSheen = styled(Animated.View)<TThemedProps<TResultSheenProps>>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: ${scale(8)}px;
  background-color: ${props => (props.correct ? props.theme.correctAnswer : props.theme.incorrectAnswer)};
`;

export const Container = styled.View<TThemedProps<{}>>`
  width: ${answerWidth}px;
  min-height: ${answerHeight}px;
  border-radius: ${scale(8)}px;
  background: ${props => props.theme.primary};
  border: ${scale(1)}px solid ${props => props.theme.border};
  justify-content: center;
  align-items: center;
  margin-top: ${scale(15)}px;
  elevation: 5;
  shadow-color: ${props => props.theme.textOnBackground};
  shadow-opacity: ${scale(0.35)};
  shadow-radius: ${scale(3.84)}px;
  shadow-offset: 0px ${scale(3)}px;
`;

export const AnswerWrap = styled.TouchableOpacity`
  width: 100%;
  height: ${answerHeight}px;
  padding: 0 ${scale(20)}px;
  border-radius: ${scale(8)}px;
  justify-content: center;
  align-items: center;
`;

export const AnswerText = styled(Animated.Text).attrs({
  numberOfLines: 2,
})<TThemedProps<{}>>`
  font-size: ${verticalScale(18)}px;
  color: ${props => props.theme.textOnPrimary};
  font-weight: 300;
  width: 100%;
  text-align: center;
`;

export const CancelSheen = styled(Animated.View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.7);
  justify-content: center;
  border-radius: ${scale(8)}px;
  align-items: center;
`;

export const RaysSvg = styled(AnimatedSvg)`
  position: absolute;
  top: ${scale(-150)}px;
  left: ${scale(-150)}px;
  width: ${scale(300) + answerWidth}px;
  height: ${scale(300) + answerHeight}px;
`;
