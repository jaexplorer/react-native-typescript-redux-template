import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../lib/Theme';

const stylesCreator: StylesCreator = (theme, scale, moderateScale) =>
  StyleSheet.create({
    homeContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

export default stylesCreator;
