import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SCREENS, TQuizNavigatorStackParamList } from '@src/router/types';

export type TAboutScreenProps = {
  navigation: NativeStackNavigationProp<TQuizNavigatorStackParamList, SCREENS.About>;
};
