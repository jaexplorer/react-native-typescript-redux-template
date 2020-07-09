import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';

/* Root Stack
------------------------------------------------------------------- */
export type RootStackParamList = {
  Main: undefined;
  Modal: undefined;
};

type MainNavigation = StackNavigationProp<RootStackParamList, 'Main'>;

type ModalNavigation = StackNavigationProp<RootStackParamList, 'Modal'>;
export interface ModalScreen {
  navigation: ModalNavigation;
  route: RouteProp<RootStackParamList, 'Modal'>;
}

/* Main Stack
------------------------------------------------------------------- */
// If a route requires params posts, eg. Feed: { posts: Post[] };
export type MainStackParamList = {
  Home: undefined;
};

type HomeNavigation = CompositeNavigationProp<
  MainNavigation,
  StackNavigationProp<MainStackParamList, 'Home'>
>;
export interface HomeScreen {
  navigation: HomeNavigation;
  route: RouteProp<MainStackParamList, 'Home'>;
}
