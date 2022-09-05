import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { scale } from 'react-native-size-matters/extend';
import { TThemedProps } from '@src/utils/themes/types';

const AnimatedFontAwesome = Animated.createAnimatedComponent(FontAwesome);

export const LoadingContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const LoadingMark = styled(AnimatedFontAwesome).attrs((props: TThemedProps<{}>) => ({
  name: 'rotate-right',
  size: scale(130),
  color: props.theme.textOnBackground,
}))`
  align-self: center;
`;

export const ErrorBlock = styled(Animated.View)`
  width: 100%;
  align-items: center;
  margin-top: ${scale(60)}px;
`;

export const ErrorText = styled.Text<TThemedProps<{}>>`
  font-size: ${scale(18)}px;
  color: ${props => props.theme.textOnBackground};
  font-weight: 400;
  width: 100%;
  text-align: center;
  margin-bottom: ${scale(18)}px;
`;
