import styled from 'styled-components/native';
import { Image } from 'react-native';
import Animated from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { scale, verticalScale } from 'react-native-size-matters/extend';
import FastImage from 'react-native-fast-image';
import { TThemedProps } from '@src/themes/types';

const AnimatedFontAwesome = Animated.createAnimatedComponent(FontAwesome);

export const Container = styled.View<TThemedProps<{}>>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
`;

export const SafeWrap = styled.View`
  width: 100%;
  height: 100%;
`;

export const QuizWrap = styled(Animated.View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const QuestionText = styled.Text<TThemedProps<{}>>`
  font-size: ${verticalScale(24)}px;
  color: ${props => props.theme.textOnBackground};
  font-weight: 400;
  width: 100%;
  text-align: center;
`;

export const AnswerTextContainer = styled.View`
  margin-top: ${scale(15)}px;
  height: ${verticalScale(24)}px;
  width: 100%;
  padding: 0 ${Math.min(verticalScale(26), scale(26))}px;
`;

export const AnswerText = styled(Animated.Text).attrs({
  numberOfLines: 1,
})<TThemedProps<{}>>`
  font-size: ${verticalScale(20)}px;
  color: ${props => props.theme.textOnPrimary};
  font-weight: 400;
  width: 100%;
  text-align: center;
`;

export const MovieCard = styled.View<TThemedProps<{}>>`
  width: ${Math.min(verticalScale(358), scale(358))}px;
  height: ${verticalScale(257)}px;
  border-radius: ${scale(8)}px;
  background: ${props => props.theme.primary};
  border: ${scale(1)}px solid ${props => props.theme.border};
  justify-content: center;
  align-items: center;
  margin: ${verticalScale(20)}px 0;
  elevation: 5;
  shadow-color: ${props => props.theme.textOnBackground};
  shadow-opacity: ${scale(0.35)};
  shadow-radius: ${scale(3.84)}px;
  shadow-offset: 0px ${scale(3)}px;
`;

export const MovieCardImage = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.cover,
})`
  width: ${Math.min(verticalScale(318), scale(318))}px;
  height: ${verticalScale(179)}px;
  border-radius: ${scale(8)}px;
`;

export const BackgroundImage = styled(Image).attrs((props: TThemedProps<{}>) => ({
  resizeMode: 'repeat',
  source: props.theme.dark
    ? require('@assets/images/background-loop.png')
    : require('@assets/images/background-loop-light.png'),
}))`
  position: absolute;
  width: 110%;
  height: 110%;
  top: -10%;
  left: -10%;
`;

export const HealthbarContainer = styled.View`
  position: absolute;
  top: ${verticalScale(15)}px;
  right: ${scale(30)}px;
`;

export const HighScoreContainer = styled.View`
  position: absolute;
  bottom: ${verticalScale(15)}px;
  right: ${scale(30)}px;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const ResultMark = styled(AnimatedFontAwesome).attrs((props: TThemedProps<{ correct: boolean }>) => ({
  name: props.correct ? 'check' : 'times',
  size: scale(130),
  color: props.correct ? props.theme.correctAnswer : props.theme.incorrectAnswer,
}))`
  position: absolute;
  top: ${scale(-30)}px;
  left: ${scale(-10)}px;
`;

export const GoBackContainer = styled.View`
  position: absolute;
  top: ${verticalScale(13)}px;
  left: ${scale(30)}px;
`;

export const ReplayButtonContainer = styled.TouchableOpacity<TThemedProps<{}>>`
  width: ${verticalScale(140)}px;
  height: ${verticalScale(140)}px;
  background-color: ${props => props.theme.highScore};
  border-radius: ${verticalScale(8)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${verticalScale(20)}px;
  elevation: 5;
  shadow-color: ${props => props.theme.textOnBackground};
  shadow-opacity: ${scale(0.35)};
  shadow-radius: ${scale(3.84)}px;
  shadow-offset: 0px ${scale(3)}px;
`;

export const ReplayButton = styled(FontAwesome).attrs((props: TThemedProps<{}>) => ({
  name: 'rotate-right',
  size: verticalScale(120),
  color: props.theme.textOnPrimary,
}))``;

export const ThemeButtonContainer = styled.TouchableOpacity<TThemedProps<{}>>`
  position: absolute;
  bottom: ${verticalScale(16)}px;
  left: ${scale(28)}px;
`;
