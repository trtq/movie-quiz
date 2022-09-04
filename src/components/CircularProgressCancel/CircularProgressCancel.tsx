import React from 'react';
import { View } from 'react-native';
import Animated, { interpolate, useAnimatedProps } from 'react-native-reanimated';
import { scale } from 'react-native-size-matters/extend';
import Svg, { Circle } from 'react-native-svg';
import { CircleWrap, TimesWrap, Times } from './layouts';
import { TCircularProgressCancelProps } from './types';

const size = scale(50);
const circumference = size * Math.PI;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const CircularProgressCancel = ({ progress }: TCircularProgressCancelProps) => {
  const animatedProps = useAnimatedProps(() => {
    const progressCalculated = interpolate(progress.value, [0, 1], [0.15 * Math.PI * size, Math.PI * size], 'clamp');
    return {
      strokeDashoffset: progressCalculated,
    };
  });

  return (
    <View>
      <CircleWrap>
        <Svg height={size} width={size}>
          <Circle cx={size / 2} cy={size / 2} r={size / 2 - 4} stroke="lightgrey" strokeWidth="4" fill={'white'} />
          <AnimatedCircle
            animatedProps={animatedProps}
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 4}
            stroke="#009101"
            strokeWidth="4"
            strokeDasharray={`${circumference}, ${circumference}`}
          />
        </Svg>
      </CircleWrap>
      <TimesWrap>
        <Times />
      </TimesWrap>
    </View>
  );
};
