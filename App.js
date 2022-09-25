import {SafeAreaView, StatusBar, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import COLORS from './src/theme/colors';
import Main from './src/screens/Main';
import Stats from './src/screens/Stats';
import SplashScreen from './src/screens/SplashScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.BACKGROUND_ONE,
  },
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}} forceInsert={{bottom: 0}}>
      <NavigationContainer theme={MyTheme}>
        <GestureHandlerRootView style={{flex: 1}}>
          <StatusBar translucent={true} backgroundColor="transparent" />
          <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Stats" component={Stats} />
          </Stack.Navigator>
        </GestureHandlerRootView>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
