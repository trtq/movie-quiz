import React from 'react';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useTiming } from 'react-native-redash';
import { scale, verticalScale } from 'react-native-size-matters/extend';
import { BrokenHeart, Cross, IconContainer, Heart, HeartContainer, heartSize } from './layouts';
import { THealthHeartProps } from './types';

// this is the heart that is used in HealthBar to show remaining health
// i ended up making the transition of losing a heart into a complex and goofy animation that i really like
export const HealthHeart = ({ dead = false }: THealthHeartProps) => {
  const deathProgress = useTiming(dead, { duration: 2000 });

  const heartStyle = useAnimatedStyle(() => {
    const heartOpacity = interpolate(deathProgress.value, [0.18, 0.24], [1, 0], 'clamp');
    return { opacity: heartOpacity };
  });

  const brokenHeartStyle = useAnimatedStyle(() => {
    const brokenHeartOpacity = interpolate(deathProgress.value, [0.18, 0.24], [0, 1], 'clamp');
    return { opacity: brokenHeartOpacity };
  });

  const crossStyle = useAnimatedStyle(() => {
    const crossOpacity = interpolate(deathProgress.value, [0.38, 0.44], [0, 1], 'clamp');
    return { opacity: crossOpacity };
  });

  const shake = heartSize / 5;
  const scaledXMid = scale(20);
  const scaledXEnd = scale(-10);
  const scaledYMid = verticalScale(250);
  const scaledYEnd = verticalScale(1000);
  const containerStyle = useAnimatedStyle(() => {
    const heartsX = interpolate(
      deathProgress.value,
      [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.4, 0.55, 1],
      [0, shake, -shake, -shake, shake, 0, 0, scaledXMid, scaledXEnd],
      'clamp',
    );

    const heartsY = interpolate(
      deathProgress.value,
      [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.4, 0.55, 1],
      [0, shake, shake, -shake, -shake, 0, 0, scaledYMid, scaledYEnd],
      'clamp',
    );

    const heartsRotaton = interpolate(
      deathProgress.value,
      [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.4, 0.6, 1],
      [0, 36, -36, -72, 72, 0, 0, -720, -1440],
      'clamp',
    );

    return {
      transform: [{ translateX: heartsX }, { translateY: heartsY }, { rotate: `${heartsRotaton}deg` }],
    };
  });
  return (
    <HeartContainer>
      <IconContainer style={containerStyle}>
        <IconContainer style={heartStyle}>
          <Heart />
        </IconContainer>
        <IconContainer style={brokenHeartStyle}>
          <BrokenHeart />
        </IconContainer>
      </IconContainer>
      <IconContainer style={crossStyle}>
        <Cross />
      </IconContainer>
    </HeartContainer>
  );
};
