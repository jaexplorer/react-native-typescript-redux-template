/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import { View } from 'react-native';
import { useTheme } from '../../lib/Theme';
import Text from '../Text';
import stylesCreator from './RotatedTextStyles';

const RotatedText: FC<RotatedTextProps> = ({ text }) => {
  const textArray = text.split('');
  const [styles] = useTheme(stylesCreator);

  return (
    <View style={styles.textArray}>
      {textArray.map((t, i) => (
        <View key={i} style={styles.letterWrapper}>
          <Text bold style={styles.text}>
            {t}
          </Text>
        </View>
      ))}
    </View>
  );
};

export interface RotatedTextProps {
  text: string;
}

export default RotatedText;
