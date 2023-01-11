export const COLORS = {
  primary: '#74C1E6',
  secondary: '#4D626C',
  tertiary: '#4D4B61',
  destructive: '#FF7276',
  acceptable: '#95E58E',
  warning: '#F1B3B3',
  info: '#B3DDF1',

  white: '#FFF',
  gray: '#74858C',
};

export const GUIDELINES = {
  border: 25,
  shadowing: {
    shadowOpacity: 0.12,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
  },
  borderRadius: {
    borderRadius: 30,
  },
  sizeToFit: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: 'InterBold',
  semiBold: 'InterSemiBold',
  medium: 'InterMedium',
  regular: 'InterRegular',
  light: 'InterLight',
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
