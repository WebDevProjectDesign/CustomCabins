import { colors } from './colors';
import { fonts } from './typeface';

export const baseTheme = {
  palette: {
    ...colors,
  },
  spacing: (value: number) => value * 8,

  typography: {
    h1: {
      fontSize: 35,
      lineHeight: 60,
      letterSpacing: -1.5,
    },
    h2: {
      fontSize: 28,
      lineHeight: 48,
      letterSpacing: -1,
    },
    h3: {
      fontSize: 22,
      lineHeight: 40,
      letterSpacing: 0,
    },
    h4: {
      fontSize: 20,
      lineHeight: 36,
      letterSpacing: 0,
    },
    headline: {
      fontSize: 17,
      lineHeight: 30,
      letterSpacing: -1,
    },
    body: {
      fontSize: 16,
      lineHeight: 30,
      letterSpacing: -1,
    },
    callout: {
      fontSize: 16,
      lineHeight: 24,
    },
    footnote: {
      fontSize: 14,
      lineHeight: 21,
    },
    caption: {
      fontSize: 11,
      lineHeight: 16.5,
      letterSpacing: 0.5,
    },
  },
};
