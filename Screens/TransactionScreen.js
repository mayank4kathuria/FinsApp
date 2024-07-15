import React, { useState } from 'react';
import { useSelector, usedispatch } from 'react-redux';
import {
  ActivityIndicator,
  Button,
  FlatList,
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

import { ICONS_ENUM } from '../Utils/ImageUtils';

function TransactionScreen() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const allCards = useSelector(state => state.allCards);
  const cards = allCards?.cards || [];
  const allTransac = cards?.reduce((acc, card) => {
    const withCardNetwork = card?.transactions?.map((tran) => ({ ...tran, cardNetwork: card?.cardNetwork }));
    return [...acc, ...withCardNetwork]

  }, []);


  return (
    <SafeAreaView className={'bg-neutral-100 h-screen p-4'}>
      <StatusBar backgroundColor={'#f5f5f5'} barStyle={'default'} />

      <View className='h-full bg-white p-2' >
        <Text className='font-bold text-black text-lg py-2' >All Transactions</Text>
        <View className='pb-40' >
          <FlatList
            className='py-2'
            data={allTransac}
            renderItem={({ item: tran }) => {
              const CategoryIcon = ICONS_ENUM[tran.categoryEnum];
              return <View className={`flex flex-row bg-white items-center px-2 py-4 mb-4 border border-l-8 border-neutral-300 rounded-lg ${tran.typeEnum === "CREDIT" ? 'border-l-green-400' : 'border-l-red-400'}`} >
                <View className='rounded-3xl mr-2 p-2'>
                  <CategoryIcon height={30} width={30} />
                </View>
                <View className='flex-1 flex flex-row justify-between items-center'>
                  <View>
                    <Text className='text-neutral-600 text-lg' >{tran.name}</Text>
                    <Text className='text-neutral-400 text-md' >{`${tran.category} | ${tran.cardNetwork}`}</Text>
                  </View>
                  <View>
                    <Text className='text-neutral-600 text-right font-bold text-lg' >{`${allCards.currencySymbol}${tran.amount}`}</Text>
                    <Text className='text-neutral-400 text-sm' >{`${tran.dateString}`}</Text>
                  </View>
                </View>
              </View>
            }}
            keyExtractor={tran => tran.id}
          />
        </View>

      </View>

    </SafeAreaView>
  );
}

export default TransactionScreen;