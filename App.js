/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './Screens/HomeScreen';


const BottomStack = createBottomTabNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = "bg-neutral-100 bg-blacky h-screen dark:bg-slate-900 p-4"

  return (
    <NavigationContainer>
      {/* <HomeScreen /> */}
      <BottomStack.Navigator initialRouteName="Home" >
        {/* Screen 1 */}
        <BottomStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarShowLabel: false, tabBarIcon : () => <Text>Icon Home</Text> }}
        />
        <BottomStack.Screen
          name="Card"
          component={HomeScreen}
          options={{ tabBarShowLabel: false, tabBarIcon : () => <Text>Icon Card</Text> }}
        />
        <BottomStack.Screen
          name="Transactions"
          component={HomeScreen}
          options={{ tabBarShowLabel: false, tabBarIcon : () => <Text>Icon Tran</Text> }}
        />
        <BottomStack.Screen
          name="Settings"
          component={HomeScreen}
          options={{ tabBarShowLabel: false, tabBarIcon : () => <Text>Icon Set</Text> }}
        />

        {/* Screen 2 */}
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}

      </BottomStack.Navigator>
    </NavigationContainer>
  );
}

export default App;