import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, MainStackParamList } from './Types';

import Home from '../screens/Home';

export { getActiveRouteName } from './Utils';

const RootStack = createStackNavigator<RootStackParamList>();
const MainStack = createStackNavigator<MainStackParamList>();
const MainNavigation: FC = () => (
  <MainStack.Navigator headerMode="none" initialRouteName="Home">
    <MainStack.Screen name="Home" component={Home} />
  </MainStack.Navigator>
);
const RootNavigation: FC = () => {
  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Main" component={MainNavigation} />
      {/* <RootStack.Screen name="Modal" component={Modal} /> */}
    </RootStack.Navigator>
  );
};

export default RootNavigation;
