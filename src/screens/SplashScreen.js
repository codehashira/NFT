import {View, ImageBackground} from 'react-native';
import React from 'react';
import Text from '../components/Text';
import GradientBlurSurface from '../components/BlurSurface';
import {FONT_FAMILY} from '../theme/textStyles';
import {MARGIN, PADDING} from '../theme/spacing';
import COLORS from '../theme/colors';
import Button from '../components/Button';
import {height, scale} from '../theme/scaling';
const background = require('../assets/images/background.png');

const SplashScreen = ({navigation, route}) => {
  return (
    <ImageBackground
      source={background}
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          padding: PADDING.MD,
          backgroundColor: 'rgba(255,255,255,0.1)',
        }}>
        <View
          style={{
            height: scale(height * 0.45),
            position: 'absolute',
            bottom: 60,
            left: 0,
            right: 0,
            padding: PADDING.MD,
          }}>
          <Text
            mode={'displaySmall'}
            style={{
              fontFamily: FONT_FAMILY.BLACK,
              textShadowColor: 'rgba(0, 0, 0, 0.12)',
              textShadowOffset: {width: 6, height: 4},
              textShadowRadius: 20,
              color: 'white',
              marginVertical: MARGIN.RG,
              lineHeight: 48,
            }}>
            Welcome to {'\n'}NFT Marketplace
          </Text>
          <GradientBlurSurface>
            <View
              style={{
                flex: 1,
                padding: PADDING.LG,
                justifyContent: 'space-between',
                backgroundColor: 'rgba(72,61,112,0.2)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderRadius: 30,
                borderWidth: 1,
              }}>
              <View
                style={{
                  flex: 0.6,
                  alignItems: 'center',
                  backgroundColor: 'Red',
                }}>
                <Text
                  mode={'headlineSmall'}
                  style={{
                    fontFamily: FONT_FAMILY.BOLD,
                    textShadowColor: 'rgba(0, 0, 0, 0.12)',
                    textShadowOffset: {width: 4, height: 4},
                    textShadowRadius: 10,
                    color: 'white',
                  }}>
                  Explore and Mint NFTs
                </Text>
                <Text
                  mode={'bodySmall'}
                  style={{color: COLORS.GREY, textAlign: 'center'}}>
                  You can buy and sell the NFTs of the best {'\n'}artists in the
                  world.{' '}
                </Text>
              </View>
              <View>
                <Button
                  style={{
                    marginHorizontal: MARGIN.XL + 20,
                  }}
                  onPress={() => {
                    navigation.navigate('Main');
                  }}>
                  Get started now
                </Button>
              </View>
            </View>
          </GradientBlurSurface>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
