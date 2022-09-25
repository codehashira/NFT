import {View, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {scale, width, height} from '../theme/scaling';
import {MARGIN} from '../theme/spacing';
import Text from './Text';
import GradientBlurSurface from './GradientBlurSurface';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';

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
      style={{
        flex: 1,
        width: scale(width * 0.65),
        marginRight: MARGIN.SM,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 30,
      }}>
      <ImageBackground
        source={image}
        style={{width: '100%', height: '100%'}}
        borderRadius={30}>
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'transparent']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          useAngle
          angle={0}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}>
          <Text
            mode={'titleLarge'}
            style={{
              textAlign: 'center',
              color: 'white',
            }}>
            {title}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
