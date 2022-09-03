import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TQuizNavigatorStackParamList, SCREENS } from '@src/router/types';

export type TDifficultyScreenProps = {
  navigation: NativeStackNavigationProp<TQuizNavigatorStackParamList, SCREENS.Difficulty>;
};
