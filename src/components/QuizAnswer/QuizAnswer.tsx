import { TTheme } from '@src/utils/themes/types';
import React, { useCallback, useContext, useState } from 'react';
import {
  Easing,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ThemeContext } from 'styled-components';
import { CircularProgressCancel } from '../CircularProgressCancel/CircularProgressCancel';
import { Container, AnswerWrap, ResultSheen, AnswerText, CancelSheen } from './layouts';
import { TQuizAnswerProps } from './types';

// one of the possible answers that appear while playing the game
// on press it shows a <CircularProgressCancel />. While that's active another press will cancel the answer.
// if the answer isn't canceled, an animation showing the correctness of the answer will play out
export const QuizAnswer = ({ correct, disabled, children, onPressOrCancel, onResult }: TQuizAnswerProps) => {
  const theme: TTheme = useContext(ThemeContext);
  const [wasPressed, setWasPressed] = useState(false);
  const [wasFullyPressed, setWasFullyPressed] = useState(false);
  const progress = useSharedValue(0);
  const answerUnstoppable = useSharedValue(false); //essentially the same as wasFullyPressed, but on worlet side

  const handlePress = useCallback(() => {
    if (!wasPressed) {
      setWasPressed(true);
      progress.value = withTiming(4, { duration: 4500, easing: Easing.linear }, finished => {
        if (finished) {
        }
      });
      if (onPressOrCancel) {
        onPressOrCancel(true);
      }
    } else if (!wasFullyPressed) {
      setWasPressed(false);
      progress.value = 0;
      if (onPressOrCancel) {
        onPressOrCancel(false);
      }
    }
  }, [onPressOrCancel, progress, wasFullyPressed, wasPressed]);

  useDerivedValue(() => {
    if (progress.value >= 1 && !answerUnstoppable.value) {
      answerUnstoppable.value = true;
      runOnJS(setWasFullyPressed)(true);
      if (onResult) {
        runOnJS(onResult)();
      }
    }
  }, [progress]);

  const resultStyle = useAnimatedStyle(() => {
    const resultOpacity = interpolate(progress.value, [1.05, 1.35], [0, 1], 'clamp');
    return { opacity: resultOpacity };
  });

  const cancelStyle = useAnimatedStyle(() => {
    const cancelScheenOpacity = interpolate(progress.value, [0, 0.1, 1, 1.05], [0, 1, 1, 0], 'clamp');
    return { opacity: cancelScheenOpacity };
  });

  const answerStyle = useAnimatedStyle(() => {
    const answerColor = interpolateColor(progress.value, [1.15, 1.35], [theme.textOnPrimary, theme.textOnActiveAnswer]);
    return { color: answerColor };
  });

  return (
    <Container>
      <AnswerWrap onPress={handlePress} disabled={!wasPressed || wasFullyPressed ? disabled : false}>
        <ResultSheen correct={correct} style={resultStyle} />
        <AnswerText style={answerStyle}>{children}</AnswerText>
        <CancelSheen style={cancelStyle}>
          <CircularProgressCancel progress={progress} />
        </CancelSheen>
      </AnswerWrap>
    </Container>
  );
};
