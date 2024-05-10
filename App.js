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
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';


const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = "bg-neutral-100 bg-blacky h-screen dark:bg-slate-900 p-4"

  return (
    <NavigationContainer>
      {/* <HomeScreen /> */}
      <Stack.Navigator initialRouteName="Home" >
        {/* Screen 1 */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '' }}
        />

        {/* Screen 2 */}
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;