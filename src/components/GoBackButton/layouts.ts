import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters/extend';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TThemedProps } from '@src/utils/themes/types';

export const GoBackMark = styled(FontAwesome).attrs((props: TThemedProps<{ correct: boolean }>) => ({
  name: 'arrow-left',
  size: scale(26),
  color: props.theme.textOnBackground,
}))``;
