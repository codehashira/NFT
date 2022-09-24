import {View, ImageBackground} from 'react-native';
import React from 'react';
import Text from './src/components/Text';
import GradientBlurSurface from './src/components/BlurSurface';
import {FONT_FAMILY} from './src/theme/textStyles';
import {MARGIN, PADDING} from './src/theme/spacing';
import COLORS from './src/theme/colors';
import Button from './src/components/Button';
const background = require('./src/assets/images/background.png');

const SplashScreen = () => {
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
        <View style={{flex: 0.55, marginBottom: MARGIN.MD + 30}}>
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
                flex: 0.8,
                padding: PADDING.LG,
                justifyContent: 'space-evenly',
                alignItems: 'center',
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
            <Button style={{marginHorizontal: MARGIN.XL + 20}}>
              Get started now
            </Button>
          </GradientBlurSurface>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
