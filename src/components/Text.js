import React from 'react';
import {Text as NativeText, StyleSheet} from 'react-native';
import FONT_STYLES from '../theme/textStyles';

const modeMap = {
  displayLarge: 'DISPLAY_LARGE',
  displayMedium: 'DISPLAY_MEDIUM',
  displaySmall: 'DISPLAY_SMALL',
  headlineLarge: 'HEADLINE_LARGE',
  headlineMedium: 'HEADLINE_MEDIUM',
  headlineSmall: 'HEADLINE_SMALL',
  titleLarge: 'TITLE_LARGE',
  titleMedium: 'TITLE_MEDIUM',
  titleSmall: 'TITLE_SMALL',
  labelLarge: 'LABEL_LARGE',
  labelMedium: 'LABEL_MEDIUM',
  labelSmall: 'LABEL_SMALL',
  bodyLarge: 'BODY_LARGE',
  bodyMedium: 'BODY_MEDIUM',
  bodySmall: 'BODy_SMALL',
};

const Text = props => {
  const {mode, style, children} = props;
  return (
    <NativeText
      style={[
        {color: 'white'},
        textStyle[modeMap[mode ?? 'bodySmall']],
        style,
      ]}>
      {children ?? 'Title?'}
    </NativeText>
  );
};

// Visualize how text renders, based on material design 3 typography
export const VisualizeTypography = () => {
  return Object.keys(modeMap).map((item, key) => {
    return (
      <Text key={`${item}`} mode={item}>
        {`${key + 1} ${item}`}
      </Text>
    );
  });
};

const textStyle = StyleSheet.create({
  ...FONT_STYLES,
  //   displayLarge: {
  //     ...FONT_STYLES.DISPLAY_LARGE,
  //   },
  //   displayMedium: {
  //     ...FONT_STYLES.DISPLAY_MEDIUM,
  //   },
  //   displaySmall: {
  //     ...FONT_STYLES.DISPLAY_SMALL,
  //   },
  //   headlineLarge: {
  //     ...FONT_STYLES.HEADLINE_LARGE,
  //   },
  //   headlineMedium: {
  //     ...FONT_STYLES.HEADLINE_MEDIUM,
  //   },
  //   headlineSmall: {
  //     ...FONT_STYLES.HEADLINE_SMALL,
  //   },
});

export default Text;
