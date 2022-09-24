import {View, Image, StatusBar} from 'react-native';
import React from 'react';
import Text from './Text';
import COLORS from '../theme/colors';
import {scale} from '../theme/scaling';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {MARGIN, PADDING} from '../theme/spacing';

const HomeHeaderAvatar = require('../assets/images/avatar.png');

const Header = props => {
  const {title, style, headerIcon, shouldShowIcon, backIcon, onBackPress} =
    props;
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: StatusBar.currentHeight,
          paddingHorizontal: PADDING.MD,
        },
        style,
      ]}>
      <View style={{flexDirection: 'row'}}>
        <MIcon
          onPress={() => {
            onBackPress();
          }}
          name="arrow-back"
          size={24}
          color={'white'}
          style={{marginRight: 10}}
        />
        <Text mode={'headlineSmall'} style={{color: 'white'}}>
          {title ?? ''}
        </Text>
      </View>
      {shouldShowIcon && (
        <Image source={HomeHeaderAvatar} style={{height: 39, width: 39}} />
      )}
    </View>
  );
};

export default Header;
