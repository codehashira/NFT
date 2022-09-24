import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';

const BlurSurface = props => {
  const {children, style} = props;
  return (
    <BlurView
      blurType={'light'}
      blurAmount={2}
      blurRadius={10}
      style={[styles.blurView, style]}>
      {children}
    </BlurView>
  );
};

export default BlurSurface;

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
