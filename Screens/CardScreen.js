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

import MoneyStackIcon from '../Assets/svgs/MoneyStackIcon.svg';
import PointArrow from '../Assets/svgs/BackArrow.svg';


function CardScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SafeAreaView className={'bg-neutral-100 h-screen p-4'}>
      <StatusBar backgroundColor={'#f5f5f5'} barStyle={'default'} />

      <View className="h-1/5 mb-4" >
        <ScrollView horizontal contentInsetAdjustmentBehavior="automatic" >

          <View className="w-72 flex p-4 ml-8 rounded-2xl bg-indigo-500" >
            <View className="flex-1 flex flex-row justify-between" >
              <Text className="font-extrabold" >**** 1234</Text>
              <Text className="font-black" >RUPAY</Text>
            </View>
            <View className="flex-1" >
              <Text className="font-semibold" >Available Balance</Text>
              <View className="flex flex-row justify-between" >
                <Text className="font-extrabold text-lg" >₹ 10,000.78</Text>
                <Text className="font-black text-lg" >09/2024</Text>
              </View>
            </View>
          </View>


          <View className="w-72 flex p-4 ml-8 rounded-2xl bg-sky-500" >
            <View className="flex-1 flex flex-row justify-between" >
              <Text className="font-extrabold" >**** 1234</Text>
              <Text className="font-black" >VISA</Text>
            </View>
            <View className="flex-1" >
              <Text className="font-semibold" >Available Balance</Text>
              <View className="flex flex-row justify-between" >
                <Text className="font-extrabold text-lg" >₹ 10,000.78</Text>
                <Text className="font-black text-lg" >09/2024</Text>
              </View>
            </View>
          </View>


          <View className="w-72 flex p-4 ml-8 rounded-2xl bg-neutral-900" >
            <View className="flex-1 flex flex-row justify-between" >
              <Text className="font-extrabold" >**** 1234</Text>
              <Text className="font-black" >MASTERCARD</Text>
            </View>
            <View className="flex-1" >
              <Text className="font-semibold" >Available Balance</Text>
              <View className="flex flex-row justify-between" >
                <Text className="font-extrabold text-lg" >₹ 10,000.78</Text>
                <Text className="font-black text-lg" >09/2024</Text>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>


      <View className="flex flex-row justify-between bg-white border border-neutral-100 rounded-2xl mb-4" >

        <View className='flex flex-row items-center p-4' >
          <View className='-rotate-90 p-2 border border-neutral-400 rounded-3xl mr-4'>
            <PointArrow height={20} width={20} />
          </View>
          <View className='px-2'>
            <Text className='text-black font-bold' >₹ 10,000.78</Text>
            <Text className='text-neutral-500 font-medium' >Income</Text>
          </View>
        </View>

        <View className='flex flex-row items-center p-4' >
          <View className='rotate-90 p-2 border border-neutral-400 rounded-3xl mr-4'>
            <PointArrow height={20} width={20} />
          </View>
          <View className='px-2'>
            <Text className='text-black font-bold' >₹ 7,000.78</Text>
            <Text className='text-neutral-500 font-medium' >Outcome</Text>
          </View>
        </View>

      </View>

      <View>
        <Text className="text-black" >Transactions</Text>
      </View>

    </SafeAreaView>
  );
}

export default CardScreen;