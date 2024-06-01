import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
    KeyboardAvoidingView,
    Text,
    Pressable,
    View,
    ScrollView,
} from 'react-native';

// import { checkForNumberWithDecialAllowed, getNumberWithDecimal } from '../../../Utils /numericUtils';
// import DropDown from '../../DropDown';

const ViewAllPaymentsModal = ({ modalData }) => {

    const { handleSubmitFn = () => null, currencySymbol, handlePaymentClick } = modalData;

    const prePayments = useSelector(state => state.prePayment)

    return (
        <ScrollView className='h-full relative'>
            <View className='py-4' ></View>
            {
                prePayments.map((prePaymentObj) => <Pressable
                    key={prePaymentObj.paymentId + ''}
                    onPress={() => handlePaymentClick(prePaymentObj, 'VIEW_ALL_PAYMENTS')}
                >
                    <View className='border border-neutral-400 mb-4' >
                        <View className='flex flex-row bg-white items-center p-4 border border-neutral-100 rounded-3xl mr-4' >
                            <View className='px-2 rounded-3xl mr-4'>
                                <Text>Image 2</Text>
                            </View>
                            <View className='px-2'>
                                <Text className='text-black font-bold' >{prePaymentObj.name}</Text>
                                <Text className='text-neutral-500 font-medium' >{`${currencySymbol}${prePaymentObj.amount}`}</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>)
            }
            <View className='py-4' ></View>
        </ScrollView>
    );
}

export default ViewAllPaymentsModal;

/* 
<View
                        className='w-36 flex flex-row bg-white items-center p-1 border border-neutral-100 rounded-3xl mr-2 my-2' >
                        <View className='flex-1 px-2 rounded-3xl mr-2'>
                            <Text>Image</Text>
                        </View>
                        <View className='flex-[2_0_0] px-2'>
                            <Text className='text-black font-bold' >{prePaymentObj.name}</Text>
                            <Text className='text-neutral-500 font-medium' >{`${currencySymbol}${prePaymentObj.amount}`}</Text>
                        </View>
                    </View>
*/