import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { verticalScale } from 'react-native-size-matters/extend';
import { TThemedProps } from '@src/themes/types';

export const ThemeButtonContainer = styled.TouchableOpacity<TThemedProps<{}>>`
  width: ${verticalScale(30)}px;
  height: ${verticalScale(30)}px;
  justify-content: center;
  align-items: center;
`;

export const ThemeButton = styled(FontAwesome).attrs((props: TThemedProps<{}>) => ({
  name: props.theme.dark ? 'sun-o' : 'moon-o',
  size: verticalScale(27),
  color: props.theme.textOnBackground,
}))``;
