import React from 'react';
import {TouchableOpacity} from 'react-native';
import COLORS from '../theme/colors';
import {scale, width} from '../theme/scaling';
import {PADDING, MARGIN} from '../theme/spacing';
import Text from './Text';

const Button = props => {
  const {style, children, lableStyle, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
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

export const TransparentButton = ({children, onPress, active}) => {
  const backgroundColor = active ? COLORS.NEU_BUTTON : 'rgba(255,255,255,0.1)';
  return (
    <TouchableOpacity
      onPress={onPress ?? (() => {})}
      activeOpacity={0.7}
      style={{
        width: scale(width * 0.4),
        borderRadius: 30,
        borderColor: 'rgba(255,255,255,0.2)',
        borderWidth: 1,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        margin: MARGIN.RG,
      }}>
      <Text
        mode="bodyMedium"
        style={[
          {textAlign: 'center', padding: PADDING.RG},
          active ? {fontWeight: '700'} : {},
        ]}>
        {children ?? 'Button'}
      </Text>
    </TouchableOpacity>
  );
};
