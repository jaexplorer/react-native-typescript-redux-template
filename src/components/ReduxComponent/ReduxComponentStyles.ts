import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../lib/Theme';

const stylesCreator: StylesCreator = (theme, scale, moderateScale) =>
  StyleSheet.create({
    exampleContainer: {
      fontSize: moderateScale(14),
    },
  });

export default stylesCreator;
