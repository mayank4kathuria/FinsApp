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
import { useSelector, useDispatch } from 'react-redux';
import { decrementMoney, incrementMoney } from '../FeatureSlice/accountSlice';
import BottomModal from '../Components/BottomModal';
import AddMoneyModal from '../Components/Modals/AddModals';
import SendMoneyModal from '../Components/Modals/SendModal';
import InvestMoneyModal from '../Components/Modals/InvestMoneyModal';


function showModalContent({ modalType = null, modalData = null }) {
  return () => {
    if (modalType === 'ADD_MONEY') return <AddMoneyModal modalData={modalData} />
    else if (modalType === 'SEND_MONEY') return <SendMoneyModal modalData={modalData} />
    else if (modalType === 'INVEST_MONEY') return <InvestMoneyModal modalData={modalData} />
    else if (modalType === 'VIEW_ALL_PAYMENTS') return <ViewAllPaymentsModal modalData={modalData} />
    else if (modalType === 'VIEW_PRE_PAYMENT') return <ViewPrePaymentModal modalData={modalData} />
    else if (modalType === 'ADD_NEW_CARD') return <AddNewCardModal modalData={modalData} />
    // else if (modalType === 'VIEW_PRE_PAYMENT') return <ViewPrePayment modalData={modalData} />
    else if (modalType === 'PAY_TO_USER') return <PayToUserModal modalData={modalData} />
    else null;
  }
}

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const availableBalance = useSelector((state) => state.account.availableBalance);
  const currencySymbol = useSelector((state) => state.account.currencySymbol);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalObj, setModalObj] = useState({ modalType: null, modalData: null });

  const dispatch = useDispatch();


  function resetModalState() {
    setModalObj({ modalType: null, modalData: null });
  }


  function handleAddMoneySubmit(incrementBy) {

    dispatch(incrementMoney(incrementBy));
    resetModalState();
    setIsModalOpen(false);
  }

  function handleSendMoneySubmit(data) {
    const { amount, sendToObj } = data;

    dispatch(decrementMoney(amount));
    resetModalState();
    setIsModalOpen(false);

  }
  
  function handleInvestMoneySubmit(data) {
    const { amount, investToObj } = data;

    dispatch(decrementMoney(amount));
    resetModalState();
    setIsModalOpen(false);

  }

  function handleCloseClick() {
    setIsModalOpen(false);
    resetModalState();

  }



  const backgroundStyle = "bg-neutral-100 bg-blacky h-screen dark:bg-slate-900 p-4";

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar backgroundColor={'#f5f5f5'} barStyle={'light-content'} />
      {/* <ActivityIndicator /> */}
      <View className='bg-white p-4 rounded-2xl mb-8' >
        <View className='flex flex-row'>
          <View className='flex-1 border-r border-neutral-200' >
            <Text>Image 2</Text>
          </View>
          <View className='flex-[3_0_0] ml-2' >
            <Text className='text-black text-2xl font-extrabold' >John Wick</Text>
            <Text className='text-neutral-500 font-medium' >Account Owner</Text>
          </View>
        </View>
        <View className='border rounded-lg border-neutral-100 my-4 p-4' >
          <Text className='text-lg text-neutral-500 font-medium mb-2' >Available balance</Text>
          <Text className='text-2xl text-black font-bold' >{`${currencySymbol} ${availableBalance}`}</Text>
        </View>

        <View className='flex flex-row justify-between items-center py-2'>
          <TouchableOpacity className='p-2 flex-1 items-center mr-2 border border-neutral-100 rounded-xl'
            onPress={() => {
              setModalObj({ modalType: 'ADD_MONEY', modalData: { handleSubmitFn: handleAddMoneySubmit } });
              setIsModalOpen(true);
              // dispatch(incrementMoney(1))
            }} >
            <Text>Add Image</Text>
            <Text className='text-black font-medium' >Add</Text>
          </TouchableOpacity>
          <TouchableOpacity className='p-2 flex-1 items-center mr-2 border border-neutral-100 rounded-xl'
            onPress={() => {
              setModalObj({ modalType: 'SEND_MONEY', modalData: { handleSubmitFn: handleSendMoneySubmit } });
              setIsModalOpen(true);
              // dispatch(decrementMoney(1))
            }}
          >
            <Text>Send Image</Text>
            <Text className='text-black font-medium' >Send</Text>
          </TouchableOpacity>
          <TouchableOpacity className='p-2 flex-1 items-center border border-neutral-100 rounded-xl'
            onPress={() => {
              setModalObj({ modalType: 'INVEST_MONEY', modalData: { handleSubmitFn: handleInvestMoneySubmit } });
              setIsModalOpen(true);
              // dispatch(decrementMoney(1))
            }}
          >
            <Text>Invest Image</Text>
            <Text className='text-black font-medium' >Invest</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View className='bg-neutral-100 mb-8' >
        <View className='flex flex-row justify-between items-center mb-4' >
          <Text className='text-xl text-black font-bold' >Monthly Payments</Text>
          <TouchableOpacity onPress={() => setIsModalOpen(true)}>
            <Text className='rounded p-2 text-indigo-400 font-bold' >View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal contentInsetAdjustmentBehavior="automatic">
          <View className='w-36 flex flex-row bg-white items-center p-1 border border-neutral-100 rounded-3xl mr-2 my-2' >
            <View className='flex-1 px-2 rounded-3xl mr-2'>
              <Text>Image</Text>
            </View>
            <View className='flex-[2_0_0] px-2'>
              <Text className='text-black font-bold' >Internet</Text>
              <Text className='text-neutral-500 font-medium' >₹40</Text>
            </View>
          </View>
          <View className='w-36 flex flex-row bg-white items-center p-1 border border-neutral-100 rounded-3xl mr-2 my-2' >
            <View className='flex-1 px-2 rounded-3xl mr-2'>
              <Text>Image</Text>
            </View>
            <View className='flex-[2_0_0] px-2'>
              <Text className='text-black font-bold' >Tv Set</Text>
              <Text className='text-neutral-500 font-medium' >₹25</Text>
            </View>
          </View>
          <View className='w-36 flex flex-row bg-white items-center p-1 border border-neutral-100 rounded-3xl mr-2 my-2' >
            <View className='flex-1 px-2 rounded-3xl mr-2'>
              <Text>Image</Text>
            </View>
            <View className='flex-[2_0_0] px-2'>
              <Text className='text-black font-bold' >XBox</Text>
              <Text className='text-neutral-500 font-medium' >₹60</Text>
            </View>
          </View>
          <View className='w-36 flex flex-row bg-white items-center p-1 border border-neutral-100 rounded-3xl mr-2 my-2' >
            <View className='flex-1 px-2 rounded-3xl mr-2'>
              <Text>Image</Text>
            </View>
            <View className='flex-[2_0_0] px-2'>
              <Text className='text-black font-bold' >Food</Text>
              <Text className='text-neutral-500 font-medium' >₹80</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View className='bg-neutral-100 mb-8' >
        <View className='flex flex-row justify-between items-center mb-4' >
          <Text className='text-xl text-black font-bold' >Advices</Text>
        </View>
        <View className='' >
          <View className='flex flex-row bg-white items-center p-4 border border-neutral-100 rounded-3xl mr-4' >
            <View className='px-2 rounded-3xl mr-4'>
              <Text>Image 2</Text>
            </View>
            <View className='px-2'>
              <Text className='text-black font-bold' >Set your budget</Text>
              <Text className='text-neutral-500 font-medium' >Take control of your finance</Text>
            </View>
          </View>
        </View>
        {/* <Button
          title='Open'
          onPress={() => setIsModalOpen(true)} >
        </Button> */}
      </View>

      <BottomModal
        visible={isModalOpen}
        onClose={handleCloseClick}
        showBackBtn
      >
        {isModalOpen && showModalContent(modalObj)()}
      </BottomModal>
    </SafeAreaView >
  );
}

export default HomeScreen;