import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TQuizNavigatorStackParamList, SCREENS } from '../../router/types';

export type THomeScreenProps = {
  navigation: NativeStackNavigationProp<TQuizNavigatorStackParamList, SCREENS.Home>;
};
