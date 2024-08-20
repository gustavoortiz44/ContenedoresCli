// import React from 'react';
// import { HomeScreen, SettingsScreen } from './src/screens';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // import {} from 're'
// //import {Ionicons} from 'react-native-vector-icons';

// const Tab = createBottomTabNavigator();
// const App = () => {
//   return (
//     // <HomeScreen/>
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App

import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
const App = () => {
  return (
    <AppNavigation/>
  )
}

export default App