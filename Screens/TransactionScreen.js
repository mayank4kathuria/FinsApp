import React, { useState } from 'react';
import { useSelector, usedispatch } from 'react-redux';
import {
  ActivityIndicator,
  Button,
  Modal,
  Pressable,
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

function TransactionScreen() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const allCards = useSelector(state => state.allCards);
  const cards = allCards?.cards || [];


  return (
    <SafeAreaView className={'bg-neutral-100 h-screen p-4'}>
      <StatusBar backgroundColor={'#f5f5f5'} barStyle={'default'} />

      <View className='h-full bg-white p-2' >
        <ScrollView className='py-2' >

          {cards[activeCardIndex]?.transactions?.map((tran, index) => <View key={tran.id + '' +index} className='flex flex-row bg-white items-center px-2 py-4 mb-4 border border-neutral-300 rounded-lg' >
            <View className='rounded-3xl mr-2'>
              {/* <CategoryIcon height={30} width={30} /> */}
              <Text>ICON</Text>
            </View>
            <View className='flex-1 flex flex-row justify-between items-center'>
              <View>
                <Text className='text-neutral-600 text-lg' >{tran.name}</Text>
                <Text className='text-neutral-400 text-md' >{tran.category}</Text>
              </View>
              <View>
                <Text className='text-neutral-600 text-right font-bold text-lg' >{`${allCards.currencySymbol}${tran.amount}`}</Text>
                <Text className='text-neutral-400 text-sm' >{`${tran.dateString}`}</Text>
              </View>
            </View>
          </View>)}

        </ScrollView>
      </View>

    </SafeAreaView>
  );
}

export default TransactionScreen;