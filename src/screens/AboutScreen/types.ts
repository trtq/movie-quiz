import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TQuizNavigatorStackParamList, SCREENS } from '../../router/types';

export type TAboutScreenProps = {
  navigation: NativeStackNavigationProp<TQuizNavigatorStackParamList, SCREENS.About>;
};
