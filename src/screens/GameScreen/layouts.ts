import styled from 'styled-components/native';
import { Image } from 'react-native';
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

export const GoBackContainer = styled.View`
  position: absolute;
  top: ${verticalScale(13)}px;
  left: ${scale(30)}px;
`;

export const ThemeButtonContainer = styled.TouchableOpacity<TThemedProps<{}>>`
  position: absolute;
  bottom: ${verticalScale(16)}px;
  left: ${scale(28)}px;
`;
