import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { scale } from 'react-native-size-matters/extend';
import { TThemedProps } from '@src/themes/types';

export const CircleWrap = styled.View`
  transform: rotate(-90deg);
`;

export const TimesWrap = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const Times = styled(FontAwesome5).attrs((props: TThemedProps<{}>) => ({
  name: 'times',
  size: scale(23),
  color: props.theme.textOnPrimary,
}))`
  text-align: center;
`;
