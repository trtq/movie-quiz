import React, { useEffect } from 'react';
import {
  Easing,
  FadeIn,
  interpolate,
  PinwheelOut,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useTiming } from 'react-native-redash';
import { MenuButton } from '@src/components/MenuButton/MenuButton';
import { ErrorBlock, ErrorText, LoadingContainer, LoadingMark } from './layouts';
import { TLoadingProps } from './types';

// a rotating circle that appears when loadup of the new questions takes a while
// on showError===true an error fades in
export const Loading = ({ onAbandon, showError }: TLoadingProps) => {
  const errorOpacity = useTiming(showError, { duration: 300 });
  const errorStyle = useAnimatedStyle(() => ({ opacity: errorOpacity.value }));

  const loadAnimation = useSharedValue(0);
  useEffect(() => {
    loadAnimation.value = withRepeat(withTiming(1, { duration: 3000, easing: Easing.linear }), -1);
  }, [loadAnimation]);
  const loadStyle = useAnimatedStyle(() => {
    const rotate = interpolate(loadAnimation.value, [0, 1], [-90, 270], 'extend');
    const scale = interpolate(loadAnimation.value, [0, 0.5, 1], [1.5, 1.3, 1.5], 'extend');
    return { transform: [{ rotate: `${rotate}deg` }, { scale }] };
  });

  return (
    <LoadingContainer>
      <LoadingMark entering={FadeIn.duration(700)} exiting={PinwheelOut.duration(300)} style={loadStyle} />
      <ErrorBlock style={errorStyle}>
        <ErrorText>It seems that TMDB can't be reached</ErrorText>
        <MenuButton onPress={onAbandon}>Abandon</MenuButton>
      </ErrorBlock>
    </LoadingContainer>
  );
};
