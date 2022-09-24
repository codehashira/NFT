import {moderateScale} from './scaling';

// Material Design 3 Typography Guidelines

export const FONT_FAMILY = {
  THIN: 'Inter-Thin',
  LIGHT: 'Inter-Light',
  EXTRALIGHT: 'Inter-ExtraLight',
  REGULAR: 'Inter-Regular',
  MEDIUM: 'Inter-Medium',
  BLACK: 'Inter-Black',
  BOLD: 'Inter-Bold',
  SEMIBOLD: 'Inter-SemiBold',
  EXTRABOLD: 'Inter-ExtraBold',
};

const FONT_SIZE = {
  DISPLAY_MEDIUM: moderateScale(45),
  DISPLAY_LARGE: moderateScale(57),
  DISPLAY_SMALL: moderateScale(36),
  HEADLINE_MEDIUM: moderateScale(28),
  HEADLINE_LARGE: moderateScale(34),
  HEADLINE_SMALL: moderateScale(24),
  TITLE_SMALL: moderateScale(14),
  TITLE_MEDIUM: moderateScale(16),
  TITLE_LARGE: moderateScale(22),
  LABEL_SMALL: moderateScale(11),
  LABEL_MEDIUM: moderateScale(12),
  LABEL_LARGE: moderateScale(14),
  BODY_SMALL: moderateScale(12),
  BODY_MEDIUM: moderateScale(14),
  BODY_LARGE: moderateScale(16),
};

const FONT_LINE_HEIGHT = {
  64: 64,
  52: 52,
  44: 44,
  40: 40,
  36: 36,
  32: 32,
  28: 28,
  24: 24,
  20: 20,
  16: 16,
};

const FONT_LETTER_SPACING = {
  ZERO: 0,
  XS: 0.1,
  SM: 0.15,
  RG: 0.25,
  MD: 0.4,
  LG: 0.5,
};

const FONT_WEIGHT = {
  400: '400',
  500: '500',
};

const FONT_STYLES = {
  DISPLAY_LARGE: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.DISPLAY_LARGE,
    fontWeight: FONT_WEIGHT[400],
    lineHeight: FONT_LINE_HEIGHT[64],
  },
  DISPLAY_MEDIUM: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.DISPLAY_MEDIUM,
    fontWeight: FONT_WEIGHT[400],
    lineHeight: 52,
  },
  DISPLAY_SMALL: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.DISPLAY_SMALL,
    fontWeight: FONT_WEIGHT[400],
    lineHeight: 64,
  },
  HEADLINE_LARGE: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.HEADLINE_SMALL,
    fontWeight: FONT_WEIGHT[400],
    lineHeight: FONT_LINE_HEIGHT[40],
    letterSpacing: FONT_LETTER_SPACING.ZERO,
  },
  HEADLINE_MEDIUM: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.HEADLINE_MEDIUM,
    fontWeight: FONT_WEIGHT[400],
    lineHeight: FONT_LINE_HEIGHT[36],
    letterSpacing: FONT_LETTER_SPACING.ZERO,
  },
  HEADLINE_SMALL: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.HEADLINE_SMALL,
    fontWeight: FONT_WEIGHT[400],
    lineHeight: FONT_LINE_HEIGHT[32],
    letterSpacing: FONT_LETTER_SPACING.ZERO,
  },
  TITLE_LARGE: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.TITLE_LARGE,
    fontWeight: FONT_WEIGHT[400],
    lineHeight: FONT_LINE_HEIGHT[28],
    letterSpacing: FONT_LETTER_SPACING.ZERO,
  },
  TITLE_MEDIUM: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.TITLE_MEDIUM,
    fontWeight: FONT_WEIGHT[500],
    lineHeight: FONT_LINE_HEIGHT[24],
    letterSpacing: FONT_LETTER_SPACING.SM,
  },
  TITLE_SMALL: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.TITLE_SMALL,
    fontWeight: FONT_WEIGHT[500],
    lineHeight: FONT_LINE_HEIGHT[20],
    letterSpacing: FONT_LETTER_SPACING.XS,
  },
  LABEL_LARGE: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.LABEL_LARGE,
    fontWeight: FONT_WEIGHT[500],
    lineHeight: FONT_LINE_HEIGHT[20],
    letterSpacing: FONT_LETTER_SPACING.SM,
  },
  LABEL_MEDIUM: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.LABEL_MEDIUM,
    fontWeight: FONT_WEIGHT[500],
    lineHeight: FONT_LINE_HEIGHT[16],
    letterSpacing: FONT_LETTER_SPACING.LG,
  },
  LABEL_SMALL: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.LABEL_SMALL,
    fontWeight: FONT_WEIGHT[500],
    lineHeight: FONT_LINE_HEIGHT[16],
    letterSpacing: FONT_LETTER_SPACING.LG,
  },
  BODY_LARGE: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BODY_LARGE,
    fontWeight: FONT_WEIGHT[400],
    lineHeight: FONT_LINE_HEIGHT[24],
    letterSpacing: FONT_LETTER_SPACING.LG,
  },
  BODY_MEDIUM: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BODY_MEDIUM,
    fontWeight: FONT_WEIGHT[400],
    lineHeight: FONT_LINE_HEIGHT[20],
    letterSpacing: FONT_LETTER_SPACING.RG,
  },
  BODY_SMALL: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BODY_SMALL,
    fontWeight: FONT_WEIGHT[400],
    lineHeight: FONT_LINE_HEIGHT[16],
    letterSpacing: FONT_LETTER_SPACING.MD,
  },
};

export default FONT_STYLES;
