import React from 'react';
import {Image, View, ImageBackground} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import COLORS from '../theme/colors';
import {scale} from '../theme/scaling';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

//icons
import {
  homeIcon,
  homeFilledIcon,
  searchIcon,
  statsIcon,
  addIcon,
  menuIcon,
  polygonIcon,
} from '../utils/getAssetsData';

const ImageIcon = props => {
  const {isActive, activeSource, inactiveSource} = props;
  const source = isActive ? activeSource : inactiveSource;

  return (
    <Image
      source={source}
      style={{width: 24, height: 24}}
      resizeMode="contain"
    />
  );
};

const Main = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          height: scale(70),
          backgroundColor: COLORS.BACKGROUND_ONE,
          borderTopWidth: 1,
          borderTopColor: 'rgba(255,255,255,0.1)',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute',
          elevation: 4,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <ImageIcon
                isActive={!focused}
                activeSource={homeIcon}
                inactiveSource={homeFilledIcon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="NotStats"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <ImageIcon
                isActive={!focused}
                activeSource={statsIcon}
                inactiveSource={statsIcon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <ImageIcon
                isActive={!focused}
                activeSource={addIcon}
                inactiveSource={addIcon}
              />
            );
          },
          tabBarButton: props => {
            return (
              <View
                style={{
                  top: -30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MCIcon name="hexagon" size={78} color={'#4D405C'} />
                <MCIcon
                  name="plus"
                  size={36}
                  color={'white'}
                  style={{position: 'absolute', top: 22}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <ImageIcon
                isActive={!focused}
                activeSource={searchIcon}
                inactiveSource={searchIcon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <ImageIcon
                isActive={!focused}
                activeSource={menuIcon}
                inactiveSource={menuIcon}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
