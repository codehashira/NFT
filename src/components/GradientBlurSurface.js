import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';

const GradientBlurSurface = props => {
  const {children, style} = props;
  return (
    <BlurView
      blurType={'light'}
      blurAmount={10}
      style={[styles.blurView, style]}>
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.1)']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        useAngle
        angle={110}
        style={styles.linearGradient}>
        {children}
      </LinearGradient>
    </BlurView>
  );
};

export default GradientBlurSurface;

const styles = StyleSheet.create({
  blurView: {
    flex: 1,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 30,
    borderWidth: 1,
  },
});
