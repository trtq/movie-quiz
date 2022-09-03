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
  padding: 0 ${scale(40)}px;
`;

export const GoBackContainer = styled.View`
  position: absolute;
  top: ${verticalScale(13)}px;
  left: ${scale(30)}px;
  z-index: 2;
`;

export const LinkedButtonContainer = styled.View`
  margin-top: ${verticalScale(15)}px;
  margin-bottom: ${verticalScale(40)}px;
`;

export const InfoWrap = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled.Text<TThemedProps<{}>>`
  color: ${props => props.theme.textOnBackground};
  font-size: ${scale(19)}px;
  width: 100%;
  margin-bottom: ${verticalScale(45)}px;
`;

export const TextHighlight = styled.Text<TThemedProps<{}>>`
  color: ${props => props.theme.highScore};
`;

export const NameText = styled.Text<TThemedProps<{}>>`
  color: ${props => props.theme.highScore};
  font-size: ${scale(20)}px;
  margin-bottom: ${verticalScale(10)}px;
`;

export const DateText = styled.Text<TThemedProps<{}>>`
  color: ${props => props.theme.textOnBackground};
  font-size: ${scale(18)}px;
`;

export const TMDBBlock = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${verticalScale(10)}px;
`;

export const TMDBLogo = styled(FastImage).attrs({
  resizeMode: 'contain',
  source: require('@assets/images/tmdb_logo.png'),
})`
  width: ${verticalScale(78)}px;
  height: ${verticalScale(78)}px;
`;

export const TMDBText = styled.Text<TThemedProps<{}>>`
  color: ${props => props.theme.textOnBackground};
  font-size: ${verticalScale(17)}px;
  flex: 1;
  padding-left: ${scale(20)}px;
`;
