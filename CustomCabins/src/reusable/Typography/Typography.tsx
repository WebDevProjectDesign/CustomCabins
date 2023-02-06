import { Text, TextProps } from 'react-native';
import React from 'react';
import { Props } from './types';
import { baseTheme, fonts } from '@Config';

const Typography = ({
  variant,
  color,
  textAlign,
  children,
  weight,
  ...rest
}: Props) => {
  let mixedStyles: TextProps['style'];
  let selectedWeight;
  mixedStyles = React.useMemo(() => {
    switch (weight) {
      case 'bold':
        selectedWeight = fonts.poppins_600;
        break;
      case 'medium':
        selectedWeight = fonts.poppins_500;
        break;
      case 'normal':
        selectedWeight = fonts.poppins_400;
        break;
      case 'light':
        selectedWeight = fonts.poppins_300;
        break;
      default:
        selectedWeight = fonts.poppins_400;
    }
    return {
      ...baseTheme.typography[variant],
      color: color ? baseTheme.palette[color] : baseTheme.palette.primary,
      textAlign,
      fontFamily: selectedWeight,
      flexShrink: 1,
    };
  }, [variant, color, textAlign, weight]);
  return (
    <Text {...rest} style={mixedStyles}>
      {children}
    </Text>
  );
};
export default Typography;
