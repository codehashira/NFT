import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = size => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = size =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const s = scale; //for width
export const vs = verticalScale; // for height
export const ms = moderateScale; // for padding, font moderateScale(fontSize,0.4)
export const mvs = moderateVerticalScale;
export {width, height};
