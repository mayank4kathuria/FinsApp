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
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import store from './Store';

import HomeScreen from './Screens/HomeScreen';
import CardScreen from './Screens/CardScreen';
import TransactionScreen from './Screens/TransactionScreen';
import SettingScreen from './Screens/SettingScreen';
import AddNewModalScreen from './Screens/AddNewModalScreen';


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
            options={{ tabBarShowLabel: false, tabBarIcon: () => <Text>Home</Text> }}
          />
          <BottomStack.Screen
            name="Card"
            component={CardScreen}
            options={{ tabBarShowLabel: false, tabBarActiveBackgroundColor: '#f00', tabBarItemStyle: { marginRight: '10px' }, tabBarIcon: () => <Text>Card</Text> }}
          />
          {/* <BottomStack.Screen
          name="Add a new"
          component={AddNewModalScreen}
          options={{ tabBarShowLabel: false, unmountOnBlur: true, tabBarIcon: () => <Text className='text-4xl text-white px-4 py-1 rounded-3xl relative bottom-6 bg-indigo-400' >+</Text> }}
        /> */}
          <BottomStack.Screen
            name="Transactions"
            component={TransactionScreen}
            options={{ tabBarShowLabel: false, tabBarActiveBackgroundColor: '#f00', tabBarItemStyle: { marginLeft: '10px' }, tabBarIcon: () => <Text>Tran</Text> }}
          />
          <BottomStack.Screen
            name="Settings"
            component={SettingScreen}
            options={{ tabBarShowLabel: false, tabBarIcon: () => <Text>Set</Text> }}
          />

          {/* Screen 2 */}
          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}

        </BottomStack.Navigator>
      </NavigationContainer >
    </Provider>
  );
}

export default App;