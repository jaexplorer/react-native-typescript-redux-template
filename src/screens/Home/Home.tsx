import React, { FC } from 'react';
import { View } from 'react-native';
import Text from '../../components/Text';
import Screen from '../../components/Screen';
import { HomeScreen } from '../../navigation/Types';
import { useTheme } from '../../lib/Theme';
import useStrings from '../../lib/Strings';
import stylesCreator from './HomeStyles';

const Home: FC<HomeProps> = ({ navigation }) => {
  const [styles] = useTheme(stylesCreator);
  const [strings] = useStrings();

  return (
    <Screen>
      <View style={styles.homeContainer}>
        <Text>{strings.HomeScreen.title}</Text>
      </View>
    </Screen>
  );
};

export interface HomeProps extends HomeScreen {}

export default Home;
