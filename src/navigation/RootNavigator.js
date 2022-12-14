import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './TabNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
