import React from 'react';
import { HomeScreen, SettingsScreen } from './src/screens';

import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RestaurantsScreen from '../screens/RestaurantsScreen';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { RankingScreen } from '../screens/RankingScreen';
import { SearchScreen } from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';

import { Icon, SocialIcon } from '@rneui/themed/dist/Icon';

//import Icon from 'react-native-vector-icons';


const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (

    <NavigationContainer>
      {/* <Tab.Navigator screenOptions={{ headerShown: false }}> para navigation.navigate */}
      <Tab.Navigator 
        screenOptions={({route})=>({
            tabBarActiveTintColor:"#00a680",
            tabBarInactiveTintColor:'#646464',
            tabBarIcon: ({color,size})=> 
                <Icon
                    name='tumblr'
                    type='evilicon'
                    color='#517fa4'
                />        
        })}    
      >
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        <Tab.Screen name="Favoritos" component={FavoriteScreen} />
        <Tab.Screen name="Ranking" component={RankingScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation