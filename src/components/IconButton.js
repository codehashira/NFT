import {TouchableOpacity} from 'react-native';
import React from 'react';

const HIT_SLOP = {top: 24, right: 24, bottom: 24, left: 24};

const IconButton = props => {
  const {onPress, icon} = props;

  return (
    <TouchableOpacity activeOpacity={0.7} hitSlop={HIT_SLOP} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
