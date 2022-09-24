import React from 'react';
import {TouchableOpacity} from 'react-native';
import COLORS from '../theme/colors';
import {PADDING} from '../theme/spacing';
import Text from './Text';

const Button = props => {
  const {style, children, lableStyle} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        {
          padding: PADDING.MD,
          backgroundColor: COLORS.BLACK,
          borderRadius: 37,
          borderColor: 'rgba(255, 255, 255, 0.5)',
        },
        style,
      ]}>
      <Text
        mode={'titleMedium'}
        style={[{color: COLORS.WHITE, textAlign: 'center'}, lableStyle ?? {}]}>
        {' '}
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
