import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';

const BlurSurface = props => {
  const {children, style} = props;
  return (
    <BlurView
      blurType={'light'}
      blurAmount={1}
      blurRadius={2}
      style={[styles.blurView, style]}>
      {children}
    </BlurView>
  );
};

export default BlurSurface;

const styles = StyleSheet.create({
  blurView: {
    flex: 1,
    borderRadius: 30,
  },
});
