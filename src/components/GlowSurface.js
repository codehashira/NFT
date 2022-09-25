import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';
import COLORS from '../theme/colors';

export default GlowSurface = ({children, style}) => {
  return (
    <LinearGradient
      colors={[COLORS.TOP_TAB_BAR_INDICATOR, 'transparent']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      useAngle
      angle={0}
      style={[{width: '100%', height: 20}, style]}>
      {children}
    </LinearGradient>
  );
};
