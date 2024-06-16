import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  Pressable,
  TouchableOpacity,
  useColorScheme,
  View,
  Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { decrementMoney, incrementMoney } from '../FeatureSlice/accountSlice';
import BottomModal from '../Components/BottomModal';
import AddMoneyModal from '../Components/Modals/AddModals';
import SendMoneyModal from '../Components/Modals/SendModal';
import InvestMoneyModal from '../Components/Modals/InvestMoneyModal';
import ViewPrePaymentModal from '../Components/Modals/PrePaymentModal';
import ViewAllPaymentsModal from '../Components/Modals/ViewAllPaymentsModal';
import { modifyPrePayment, addNewPrePayment, removePrePayment } from '../FeatureSlice/prePaymentSlice';
import { ICONS_ENUM } from '../Utils/ImageUtils';

import InvestMoney from "../Assets/svgs/InvestMoney.svg";
import AddMoney from "../Assets/svgs/AddMoney.svg";
import SendMoney from "../Assets/svgs/SendMoney.svg";
import MoneyStackIcon from "../Assets/svgs/MoneyStackIcon.svg";

const Profile_Image = require('../Assets/jpeg/john-wick-2.jpeg');

const EXTRA_HEIGHT_MODALS = ['VIEW_PRE_PAYMENT', 'VIEW_ALL_PAYMENTS'];

function showModalContent({ modalType = null, modalData = null }) {
  return () => {
    if (modalType === 'ADD_MONEY') return <AddMoneyModal modalData={modalData} />
    else if (modalType === 'SEND_MONEY') return <SendMoneyModal modalData={modalData} />
    else if (modalType === 'INVEST_MONEY') return <InvestMoneyModal modalData={modalData} />
    else if (modalType === 'VIEW_PRE_PAYMENT') return <ViewPrePaymentModal modalData={modalData} />
    else if (modalType === 'VIEW_ALL_PAYMENTS') return <ViewAllPaymentsModal modalData={modalData} />
    else if (modalType === 'ADD_NEW_CARD') return <AddNewCardModal modalData={modalData} />
    // else if (modalType === 'VIEW_PRE_PAYMENT') return <ViewPrePayment modalData={modalData} />
    else if (modalType === 'PAY_TO_USER') return <PayToUserModal modalData={modalData} />
    else null;
  }
}

function HomeScreen() {
  const availableBalance = useSelector((state) => state.account.availableBalance);
  const currencySymbol = useSelector((state) => state.account.currencySymbol);
  const prePayments = useSelector(state => state.prePayment)

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

  function handleViewPrePaymentSubmit(data, redirectTo = '') {

    dispatch(modifyPrePayment(data));

    if (redirectTo) {
      if (redirectTo === 'VIEW_ALL_PAYMENTS') setModalObj({ modalType: 'VIEW_ALL_PAYMENTS', modalData: { currencySymbol, handleSubmitFn: handleViewPrePaymentSubmit, handlePaymentClick } });
    } else {
      resetModalState();
      setIsModalOpen(false);
    }
  }

  function handleCloseClick() {
    setIsModalOpen(false);
    resetModalState();

  }

  function handlePaymentClick(prePaymentObj,) {
    setModalObj({ modalType: 'VIEW_PRE_PAYMENT', modalData: { handleSubmitFn: (data) => handleViewPrePaymentSubmit(data, 'VIEW_ALL_PAYMENTS'), currencySymbol, data: prePaymentObj } });
    setIsModalOpen(true);
  }


  return (
    <SafeAreaView className={'bg-neutral-100 h-screen p-4'}>
      <StatusBar backgroundColor={'#f5f5f5'} barStyle={'light-content'} />
      <View className='bg-white p-4 rounded-2xl mb-8' >
        <View className='flex flex-row'>
          <View className='flex-1 border-r border-neutral-200' >
            <Image source={Profile_Image} style={{ height: 54, width: 54, borderRadius: 50 }} />
          </View>
          <View className='flex-[3_0_0] ml-2' >
            <Text className='text-black text-2xl font-extrabold' >John Wick</Text>
            <Text className='text-neutral-500 font-medium' >Account Owner</Text>
          </View>
        </View>
        <View className='border rounded-lg border-neutral-100 my-4 p-4' >
          <Text className='text-lg text-neutral-500 font-medium mb-2' >Available balance</Text>
          <Text className='text-2xl text-black font-bold' >{`${currencySymbol} ${availableBalance}`}</ Text>
        </View>

        <View className='flex flex-row justify-between items-center py-2'>
          <TouchableOpacity className='p-2 flex-1 items-center mr-2 border border-neutral-200 rounded-xl'
            onPress={() => {
              setModalObj({ modalType: 'ADD_MONEY', modalData: { handleSubmitFn: handleAddMoneySubmit } });
              setIsModalOpen(true);
              // dispatch(incrementMoney(1))
            }} >
            <AddMoney height={30} width={30} />
            <Text className='mt-2 font-medium text-black' >Add</Text>
          </TouchableOpacity>
          <TouchableOpacity className='p-2 flex-1 items-center mr-2 border border-neutral-200 rounded-xl'
            onPress={() => {
              setModalObj({ modalType: 'SEND_MONEY', modalData: { handleSubmitFn: handleSendMoneySubmit } });
              setIsModalOpen(true);
            }}
          >
            <SendMoney height={30} width={30} />
            <Text className='mt-2 font-medium text-black' >Send</Text>
          </TouchableOpacity>
          <TouchableOpacity className='p-2 flex-1 items-center border border-neutral-200 rounded-xl'
            onPress={() => {
              setModalObj({ modalType: 'INVEST_MONEY', modalData: { handleSubmitFn: handleInvestMoneySubmit } });
              setIsModalOpen(true);
            }}
          >
            <InvestMoney height={30} width={30} />
            <Text className='mt-2 font-medium text-black' >Invest</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View className='bg-neutral-100 mb-8' >
        <View className='flex flex-row justify-between items-center mb-4' >
          <Text className='text-xl text-black font-bold' >Monthly Payments</Text>
          <TouchableOpacity onPress={() => {
            setModalObj({ modalType: 'VIEW_ALL_PAYMENTS', modalData: { currencySymbol, handleSubmitFn: handleViewPrePaymentSubmit, handlePaymentClick } });
            setIsModalOpen(true);

          }}>
            <Text className='rounded p-2 text-indigo-400 font-bold' >View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal contentInsetAdjustmentBehavior="automatic">

          {prePayments.slice(0, 4).map((prePaymentObj) => {
            const CategoryIcon = ICONS_ENUM[prePaymentObj?.categoryObj?.value] || <></>
            return (<Pressable
              key={prePaymentObj.paymentId + ''}
              onPress={() => handlePaymentClick(prePaymentObj)}
            >
              <View className='flex flex-row bg-white items-center p-2 border border-neutral-50 rounded-2xl mr-2 my-2' >
                <View className='flex-1 px-2 rounded-3xl mr-2'>
                  <CategoryIcon height={30} width={30} />
                </View>
                <View className='flex-[2_2_0%] px-2'>
                  <Text className='text-black font-bold' >{prePaymentObj.name}</Text>
                  <Text className='text-neutral-500 font-medium' >{`${currencySymbol}${prePaymentObj.amount}`}</Text>
                </View>
              </View>
            </Pressable>)
          })}

        </ScrollView>
      </View>

      <View className='bg-neutral-100 mb-8' >
        <View className='flex flex-row justify-between items-center mb-4' >
          <Text className='text-xl text-black font-bold' >Advices</Text>
        </View>
        <View className='' >
          <View className='flex flex-row bg-white items-center p-4 border border-neutral-100 rounded-xl' >
            <View className='px-2 rounded-3xl mr-4'>
              <MoneyStackIcon height={30} width={30} />
            </View>
            <View className='px-2'>
              <Text className='text-black font-bold' >Set your budget</Text>
              <Text className='text-neutral-500 font-medium' >Take control of your finance</Text>
            </View>
          </View>
        </View>

      </View>

      <BottomModal
        visible={isModalOpen}
        onClose={handleCloseClick}
        showBackBtn
        containerStyle={EXTRA_HEIGHT_MODALS.indexOf(modalObj.modalType) > -1 ? 'h-2/3' : ''}
      >
        {isModalOpen && showModalContent(modalObj)()}
      </BottomModal>
    </SafeAreaView >
  );
}

export default HomeScreen;