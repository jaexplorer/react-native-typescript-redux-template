import React, { FC } from 'react';
import Text from '../Text';
import { Style } from '../../lib/Types';
import ButtonRoot, { ButtonRootProps } from './ButtonRoot';
import { useTheme } from '../../lib/Theme';
import stylesCreator from './ButtonStyles';

const Button: FC<ButtonProps> = ({
  onPress = () => {},
  disabled = false,
  primary = true,
  children,
  style = {},
  textStyle = {},
}) => {
  const [styles] = useTheme(stylesCreator, { primary });

  return (
    <ButtonRoot style={[styles.buttonContainer, style]} onPress={onPress} disabled={disabled}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </ButtonRoot>
  );
};

export interface ButtonProps extends ButtonRootProps {
  textStyle?: Style;
  children: string;
  primary?: boolean;
}

export default Button;
