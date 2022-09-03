import styled from 'styled-components/native';
import { TThemedProps } from '@src/themes/types';

export const Container = styled.SafeAreaView<TThemedProps<{}>>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
`;
