import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import COLORS from './src/theme/colors';
import {scale} from './src/theme/scaling';

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
} from './src/utils/getAssetsData';

const ImageIcon = props => {
  const {isActive, activeSource, inactiveSource} = props;
  const source = isActive ? activeSource : inactiveSource;
  console.log(source);
  return (
    <Image
      source={source}
      style={{width: 24, height: 24}}
      resizeMode="contain"
    />
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: scale(70),
            backgroundColor: COLORS.BACKGROUND_ONE,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            position: 'absolute',
            bottom: 0,
            // elevation: 3,
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
          name="Stats"
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
                <ImageBackground
                  source={polygonIcon}
                  style={{
                    height: 78,
                    width: 78,
                    borderRadius: 30,
                    top: -20,
                  }}
                  resizeMode={'contain'}>
                  {props.children}
                </ImageBackground>
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
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({});
