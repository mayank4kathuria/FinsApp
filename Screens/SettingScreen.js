import React, { useState } from 'react';
// import type { PropsWithChildren } from 'react';
import {
  ActivityIndicator,
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function SettingScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SafeAreaView className={'bg-neutral-100 bg-blacky h-screen p-4'}>
      <Text className='text-black text-lg py-2' >We are working on bringing setting section soon on this app</Text>

      <View className='' >
        <View className='flex flex-row bg-white items-center p-4 border border-neutral-100 rounded-xl' >
          <View className='px-2'>
            <Text className='text-black font-bold' >App Developer</Text>
            <Text className='text-neutral-500 font-large' >MAYANK KATHURIA</Text>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
}

export default SettingScreen;