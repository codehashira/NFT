import {View, ImageBackground, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {PADDING} from '../theme/spacing';
import COLORS from '../theme/colors';
import BottomSheet from '../components/BottomSheet';
import Text from '../components/Text';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {scale, width} from '../theme/scaling';
import StatsRanking from './subscreens/StatsRanking';
import StatsActivity from './subscreens/StatsActivity';

import {rankingIcon, activityIcon, getItemImages} from '../utils/getAssetsData';

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
        tabBarIndicatorStyle: {
          backgroundColor: '#97A9F7',
          height: 5,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          shadowColor: 'red',
          elevation: 2,
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
        }}
      />
      <TopTab.Screen
        name="Activity"
        component={StatsActivity}
        options={{
          tabBarIcon: () => <ImageIcon source={activityIcon} />,
        }}
      />
    </TopTab.Navigator>
  );
};

const Stats = ({navigation, route}) => {
  const {image, title} = route.params;

  const spaceSeparetedTitle = title.replace(' ', '\n');

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
        shouldShowIcon={false}
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
          <Text
            mode="displayMedium"
            style={{
              color: 'white',
              position: 'absolute',
              bottom: 10,
              left: 10,
            }}>
            {spaceSeparetedTitle}
          </Text>
        </ImageBackground>
        <BottomSheet>
          <BottomSheetView />
        </BottomSheet>
      </View>
    </View>
  );
};

export default Stats;
