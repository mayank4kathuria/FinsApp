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
      <Text className='text-black text-lg py-2' >We are working on bringing Setting section soon on this app</Text>
    </SafeAreaView>
  );
}

export default SettingScreen;