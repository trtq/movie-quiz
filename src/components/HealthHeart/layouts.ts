import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters/extend';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Animated from 'react-native-reanimated';
import { TThemedProps } from '@src/themes/types';

export const heartSize = scale(25);

export const HeartContainer = styled.View`
  width: ${heartSize}px;
  height: ${heartSize}px;
  justify-content: center;
  align-items: center;
`;

export const Heart = styled(FontAwesome5).attrs((props: TThemedProps<{}>) => ({
  name: 'heart',
  solid: true,
  size: heartSize,
  color: props.theme.heartColor,
}))``;

export const BrokenHeart = styled(FontAwesome5).attrs((props: TThemedProps<{}>) => ({
  name: 'heart-broken',
  solid: true,
  size: heartSize,
  color: props.theme.heartColor,
}))``;

export const IconContainer = styled(Animated.View)`
  width: ${heartSize}px;
  height: ${heartSize}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Cross = styled(FontAwesome5).attrs((props: TThemedProps<{}>) => ({
  name: 'cross',
  solid: true,
  size: heartSize,
  color: props.theme.crossColor,
}))``;
