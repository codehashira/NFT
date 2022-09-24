import {View, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../theme/colors';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';

const GradientSurface = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.BACKGROUND_ONE}}>
      <LinearGradient
        colors={['#0C445B', '#0C4444']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        useAngle
        angle={110}
        style={styles.linearGradient}></LinearGradient>
    </View>
  );
};

export default GradientSurface;

const styles = StyleSheet.create({
  blurView: {
    flex: 1,
  },
  linearGradient: {
    height: '40%',
    width: '100%',
    borderRadius: 50,
  },
});
