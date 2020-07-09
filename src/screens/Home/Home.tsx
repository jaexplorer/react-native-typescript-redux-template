import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { HomeScreen } from '../../navigation/Types';

const Home: FC<HomeProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export interface HomeProps extends HomeScreen {}

export default Home;
