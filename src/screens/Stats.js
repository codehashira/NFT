import {View, ImageBackground, Image, BackHandler} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {MARGIN, PADDING} from '../theme/spacing';
import COLORS from '../theme/colors';
import BottomSheet from '../components/BottomSheet';
import Text from '../components/Text';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {scale, width} from '../theme/scaling';
import StatsRanking from './subscreens/StatsRanking';
import StatsActivity from './subscreens/StatsActivity';
import GlowSurface from '../components/GlowSurface';
import {rankingIcon, activityIcon, menuIcon} from '../utils/getAssetsData';
import LinearGradient from 'react-native-linear-gradient';

const ImageIcon = ({source, style}) => {
  return (
    <Image
      source={source}
      style={[{width: 24, height: 24}, style]}
      resizeMode="contain"
    />
  );
};
const TopTab = createMaterialTopTabNavigator();

const BottomSheetView = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarPressColor: 'transparent',
        tabBarStyle: {
          backgroundColor: 'transparent',
          marginHorizontal: scale(width * 0.15),
          elevation: 0,
        },
        tabBarLabelStyle: {
          color: 'white',
        },
        tabBarItemStyle: {
          flexDirection: 'row',
        },
      }}>
      <TopTab.Screen
        name="Ranking"
        component={StatsRanking}
        options={{
          tabBarIcon: () => <ImageIcon source={rankingIcon} />,
          tabBarIndicator: () => (
            <GlowSurface
              style={{
                width: '55%',
                height: 15,
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '98%',
                  height: 5,
                  backgroundColor: COLORS.TOP_TAB_BAR_INDICATOR,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}></View>
            </GlowSurface>
          ),
        }}
      />
      <TopTab.Screen
        name="Activity"
        component={StatsActivity}
        options={{
          tabBarIcon: () => <ImageIcon source={activityIcon} />,
          tabBarIndicator: () => (
            <GlowSurface
              style={{
                width: '55%',
                height: 15,
                position: 'absolute',
                bottom: 0,
                right: 0,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '98%',
                  height: 5,
                  backgroundColor: COLORS.TOP_TAB_BAR_INDICATOR,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}></View>
            </GlowSurface>
          ),
        }}
      />
    </TopTab.Navigator>
  );
};

const Stats = ({navigation, route}) => {
  const [isReady, setIsReady] = useState(false);
  const {image, title} = route.params;

  const spaceSeparetedTitle = title.replace(' ', '\n');

  useState(() => {
    // Disable Hardware Back Navigation
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );

    setTimeout(() => {
      setIsReady(true);
    }, 1);

    return () => backHandler.remove();
  });

  if (!isReady)
    return (
      <View style={{flex: 1, backgroundColor: COLORS.BACKGROUND_ONE}}></View>
    );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.BACKGROUND_ONE,
        justifyContent: 'space-between',
      }}>
      <Header
        style={{flex: 0.05}}
        title={'Stats'}
        backIconvisible={true}
        shouldShowIcon={true}
        headerIcon={<ImageIcon source={menuIcon} />}
        onBackPress={navigation.goBack}
      />
      <View style={{flex: 0.95}}>
        <ImageBackground
          source={image}
          style={{
            flex: 0.3,
            height: '100%',
            width: '100%',
          }}
          resizeMode={'cover'}>
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'transparent']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            useAngle
            angle={0}
            style={{width: '100%', position: 'absolute', left: 0, bottom: 0}}>
            <Text
              mode="displayMedium"
              style={{
                color: 'white',
                marginLeft: MARGIN.RG,
                marginBottom: MARGIN.XS,
                fontWeight: '700',
              }}>
              {spaceSeparetedTitle}
            </Text>
          </LinearGradient>
        </ImageBackground>
        <BottomSheet>
          <BottomSheetView />
        </BottomSheet>
      </View>
    </View>
  );
};

export default Stats;
