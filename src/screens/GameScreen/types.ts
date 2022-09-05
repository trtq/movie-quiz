import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TQuizNavigatorStackParamList, SCREENS } from '@src/router/types';

export type TGameScreenProps = {
  navigation: NativeStackNavigationProp<TQuizNavigatorStackParamList, SCREENS.Game>;
};

export type TQuestion = {
  id: number;
  picture: string;
  correctName: string;
  answers: TAnswer[];
};

export type TAnswer = {
  id: number;
  name: string;
  correct: boolean;
};