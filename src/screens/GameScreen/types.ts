import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TQuizNavigatorStackParamList, SCREENS } from '@src/router/types';

export type TGameScreenProps = {
  navigation: NativeStackNavigationProp<TQuizNavigatorStackParamList, SCREENS.Game>;
};
