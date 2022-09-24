import {View, Image} from 'react-native';
import React from 'react';
import Text from './Text';

const HomeHeaderAvatar = require('../assets/images/avatar.png');

const Header = props => {
  const {title, style, headerIcon} = props;
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        style,
      ]}>
      <Text mode={'headlineSmall'} style={{color: 'white'}}>
        {title ?? ''}
      </Text>
      <Image source={HomeHeaderAvatar} style={{height: 39, width: 39}} />
    </View>
  );
};

export default Header;
