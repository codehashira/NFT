import React from 'react';
import {Image, View, ImageBackground} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import COLORS from '../theme/colors';
import {scale} from '../theme/scaling';

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
          borderTopWidth: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute',
          elevation: 0,
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
                inactiveSource={null}
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
                inactiveSource={null}
              />
            );
          },
          tabBarButton: props => {
            return (
              <View
                style={{
                  height: 78,
                  width: 78,
                  top: -39,
                  borderRadius: 30,
                  backgroundColor: 'purple',
                }}>
                {props.children}
              </View>
              // <ImageBackground
              //   source={polygonIcon}
              //   style={{
              //     height: 78,
              //     width: 78,
              //     borderRadius: 30,
              //     top: -20,
              //   }}
              //   resizeMode={'contain'}>
              //   {props.children}
              // </ImageBackground>
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
                inactiveSource={null}
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
                inactiveSource={null}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
