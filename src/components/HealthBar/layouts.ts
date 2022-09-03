import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters/extend';

export const Container = styled.View`
  justify-content: flex-start;
  flex-direction: row-reverse;
`;

export const HeartContainer = styled.View`
  margin-left: ${scale(5)}px;
`;
