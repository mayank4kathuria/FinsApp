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


import PointArrow from '../Assets/svgs/BackArrow.svg';


function CardScreen() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const allCards = useSelector(state => state.allCards);
  const cards = allCards?.cards || [];


  return (
    <SafeAreaView className={'bg-neutral-100 h-screen p-4'}>
      <StatusBar backgroundColor={'#f5f5f5'} barStyle={'default'} />

      <View className="h-1/5 mb-4" >
        <ScrollView horizontal contentInsetAdjustmentBehavior="automatic" >
          {cards.map((card, index) => {
            return <Pressable key={`card-${index}`} className={`w-72 flex p-4 ml-8 rounded-2xl ${card.cardColor}`} onPress={() => setActiveCardIndex(index)} >
              <View className="flex-1 flex flex-row justify-between" >
                <Text className="font-extrabold" >{card.cardNoInText}</Text>
                <Text className="font-black" >{card.cardNetwork}</Text>
              </View>
              <View className="flex-1" >
                <Text className="font-semibold" >Available Balance</Text>
                <View className="flex flex-row justify-between" >
                  <Text className="font-extrabold text-lg" >{`${allCards.currencySymbol} ${card.totalIncomeAmount}`}</Text>
                  <Text className="font-black text-lg" >{card.cardExpiryInText}</Text>
                </View>
              </View>
            </Pressable>
          })}


        </ScrollView>
      </View>


      <View className="flex flex-row justify-between bg-white border border-neutral-100 rounded-2xl mb-4" >

        <View className='flex flex-row items-center p-4' >
          <View className='-rotate-90 p-2 border border-neutral-400 rounded-3xl mr-4'>
            <PointArrow height={20} width={20} />
          </View>
          <View className='px-2'>
            <Text className='text-black font-bold' >{`${allCards.currencySymbol} ${cards[activeCardIndex]?.totalIncomeAmount}`}</Text>
            <Text className='text-neutral-500 font-medium' >Income</Text>
          </View>
        </View>

        <View className='flex flex-row items-center p-4' >
          <View className='rotate-90 p-2 border border-neutral-400 rounded-3xl mr-4'>
            <PointArrow height={20} width={20} />
          </View>
          <View className='px-2'>
            <Text className='text-black font-bold' >{`${allCards.currencySymbol} ${cards[activeCardIndex]?.totalOutgoneAmount}`}</Text>
            <Text className='text-neutral-500 font-medium' >Outcome</Text>
          </View>
        </View>

      </View>

      <View>
        <Text className="text-black" >Transactions</Text>
        <Text className="text-black" >{`${cards[activeCardIndex]?.transactions?.length}`}</Text>
      </View>

    </SafeAreaView>
  );
}

export default CardScreen;

/* 
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

*/