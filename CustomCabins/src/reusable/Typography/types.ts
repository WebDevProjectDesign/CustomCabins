import { colors, baseTheme } from '@Src/config';

import { TextProps } from 'react-native';

export type Props = {
  variant: keyof typeof baseTheme.typography;
  color?: keyof typeof baseTheme.palette;
  textAlign?: 'center' | 'left' | 'right' | 'justify';
  weight?: 'bold' | 'medium' | 'normal' | 'light';
  children?: React.ReactNode;
} & TextProps;
