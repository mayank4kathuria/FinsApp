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
import { ICONS_ENUM } from '../Utils/ImageUtils';


function CardScreen() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const allCards = useSelector(state => state.allCards);
  const cards = allCards?.cards || [];


  return (
    <SafeAreaView className={'bg-neutral-100 h-screen p-4'}>
      <StatusBar backgroundColor={'#f5f5f5'} barStyle={'default'} />

      <View className="h-1/5 mb-4" >
        <ScrollView horizontal contentInsetAdjustmentBehavior="automatic" >
          {cards.map((card, index) => <Pressable key={`card-${index}`} className={`w-72 flex p-4 ml-8 rounded-2xl ${card.cardColor}`} onPress={() => setActiveCardIndex(index)} >
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
          </Pressable>)}


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

      <View className='h-3/5 bg-white p-2 pb-20' >
        <Text className='text-xl text-black font-bold' >Transactions</Text>

        <ScrollView className='py-2' >

          {cards[activeCardIndex]?.transactions?.map((tran, index) => {
            const CategoryIcon = ICONS_ENUM[tran.categoryEnum];

            return <View key={tran.id + '' + index} className={`flex flex-row bg-white items-center px-2 py-4 mb-4 border border-l-8 border-neutral-300 rounded-lg ${tran.typeEnum === "CREDIT" ? 'border-l-green-400' : 'border-l-red-400'}`} >
              <View className='rounded-3xl mr-2 p-2'>
                <CategoryIcon height={30} width={30} />
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
            </View>
          })}

        </ScrollView>
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