import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
import {View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'purple'}}>
      <Text>Home</Text>
    </View>
  );
};

const TabNavigator = () => {
  <Tab.Navigator>
    <Tab.Screen name="home" component={Home} />
    <Tab.Screen name="hossme" component={Home} />
    {/* <Tab.Screen name="home" component={Home} /> */}
  </Tab.Navigator>;
};

export default TabNavigator;
