import { Platform, StyleSheet } from 'react-native';
import { StylesCreator } from '../../lib/Theme';

const stylesCreator: StylesCreator = (theme, scale, moderateScale, props) =>
  StyleSheet.create({
    text: {
      fontFamily: props.bold ? theme.font.bold : theme.font.regular,
      fontSize: props.bold ? moderateScale(14) : moderateScale(10),
      textAlignVertical: 'center',
      textAlign: 'center',
      bottom: Platform.select({ ios: -5, default: 0 }),
      color: props.bold ? theme.colours.textColours.secondary : theme.colours.textColours.primary,
      marginBottom: props.bold ? scale(2) : scale(0),
    },
  });

export default stylesCreator;
