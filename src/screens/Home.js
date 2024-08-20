import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { HomeScreen } from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import AccountScreen from './AccountScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName='AccountScreen'>
        {/* <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen> */}
        <Stack.Screen name='AccountScreen' component={AccountScreen} options={{headerTitle:''}}></Stack.Screen>
        <Stack.Screen name='DetailsScreen' component={DetailsScreen}></Stack.Screen>
    </Stack.Navigator>

  )
}

export default Home