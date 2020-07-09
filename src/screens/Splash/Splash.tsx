import React, { FC } from 'react';
import { View, Text } from 'react-native';

const Splash: FC<SplashProps> = () => {
  return (
    <View>
      <Text>Hello Splash</Text>
    </View>
  );
};

export interface SplashProps {}

export default Splash;
