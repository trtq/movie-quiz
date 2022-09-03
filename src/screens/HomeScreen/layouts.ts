import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters/extend';
import FastImage from 'react-native-fast-image';
import { TThemedProps } from '@src/themes/types';

export const Container = styled.View<TThemedProps<{}>>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
`;

export const SafeWrap = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContGameContainer = styled.View`
  margin-bottom: ${verticalScale(20)}px;
`;

export const ThemeButtonContainer = styled.TouchableOpacity<TThemedProps<{}>>`
  position: absolute;
  bottom: ${verticalScale(16)}px;
  left: ${scale(28)}px;
`;

export const BackgroundImage = styled(FastImage).attrs((props: TThemedProps<{}>) => ({
  resizeMode: 'cover',
  source: props.theme.dark ? require('@assets/images/film.png') : require('@assets/images/film-light.png'),
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const Logo = styled(FastImage).attrs({
  resizeMode: 'contain',
  source: require('@assets/images/logo.png'),
})`
  width: ${scale(320)}px;
  height: ${scale(135)}px;
  margin-bottom: ${verticalScale(200)}px;
`;
