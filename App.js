/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  useColorScheme,
} from 'react-native';

import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import store from './Store';

import HomeScreen from './Screens/HomeScreen';
import CardScreen from './Screens/CardScreen';
import TransactionScreen from './Screens/TransactionScreen';
import SettingScreen from './Screens/SettingScreen';

import CreditCard from './Assets/svgs/CreditCardIcon.svg';
import HomeIcon from './Assets/svgs/HomeIcon.svg';
import TransactionIcon from './Assets/svgs/TransactionIcon.svg';
import SettingsIcon from './Assets/svgs/SettingsIcon.svg';


const BottomStack = createBottomTabNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = "bg-neutral-100 bg-blacky h-screen dark:bg-slate-900 p-4"

  return (
    <Provider store={store} >
      <NavigationContainer>
        {/* <HomeScreen /> */}
        <BottomStack.Navigator initialRouteName="Home" >
          {/* Screen 1 */}
          <BottomStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarShowLabel: false, tabBarActiveBackgroundColor: '#818cf880', tabBarIcon: () => <HomeIcon height={30} width={30} /> }}
          />
          <BottomStack.Screen
            name="Card"
            component={CardScreen}
            options={{ tabBarShowLabel: false, tabBarActiveBackgroundColor: '#818cf880', tabBarItemStyle: { marginRight: '10px' }, tabBarIcon: () => <CreditCard height={30} width={30} /> }}
          />
          <BottomStack.Screen
            name="Transactions"
            component={TransactionScreen}
            options={{ tabBarShowLabel: false, tabBarActiveBackgroundColor: '#818cf880', tabBarItemStyle: { marginLeft: '10px' }, tabBarIcon: () => <TransactionIcon height={30} width={30} /> }}
          />
          <BottomStack.Screen
            name="Settings"
            component={SettingScreen}
            options={{ tabBarShowLabel: false, tabBarActiveBackgroundColor: '#818cf880', tabBarIcon: () => <SettingsIcon height={30} width={30} /> }}
          />

          {/* Screen 2 */}
          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}

        </BottomStack.Navigator>
      </NavigationContainer >
    </Provider>
  );
}

export default App;