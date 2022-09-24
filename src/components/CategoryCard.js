import {View, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {scale, width, height} from '../theme/scaling';
import {MARGIN} from '../theme/spacing';
import Text from './Text';

const CategoryCard = props => {
  const {image, title, onPress} = props;

  const handleOnPress = () => {
    onPress('Stats', {
      title,
      image,
    });
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      activeOpacity={0.7}
      style={{flex: 1, width: scale(width * 0.65), marginRight: MARGIN.SM}}>
      <ImageBackground
        source={image}
        style={{width: '100%', height: '100%'}}
        borderRadius={30}>
        <Text
          mode={'titleLarge'}
          style={{
            textAlign: 'center',
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
            color: 'white',
          }}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
