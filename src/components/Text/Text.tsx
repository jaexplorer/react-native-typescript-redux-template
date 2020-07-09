import React, { FC, ReactNode } from 'react';
import { Text as RNText, TextInputProps } from 'react-native';
import { Style } from '../../lib/Types';
import { useTheme } from '../../lib/Theme';
import stylesCreator from './TextStyles';

const Text: FC<TextProps> = ({ bold = false, children, style, ...props }) => {
  const [styles] = useTheme(stylesCreator, { bold });
  return (
    <RNText style={[styles.text, style]} maxFontSizeMultiplier={1} {...props}>
      {children}
    </RNText>
  );
};

export interface TextProps extends TextInputProps {
  bold?: boolean;
  children?: string | number | ReactNode[];
  style?: Style;
}

export default Text;
