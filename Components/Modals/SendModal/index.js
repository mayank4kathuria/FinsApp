import React, { useState } from 'react';

import {
    Button,
    KeyboardAvoidingView,
    Text,
    TextInput,
    View,
} from 'react-native';

import { checkForNumberWithDecialAllowed, getNumberWithDecimal } from '../../../Utils /numericUtils';
import DropDown from '../../DropDown';

const SEND_TO_USERS_LIST = [
    {
        id: 1,
        name: 'Mom',
    },
    {
        id: 2,
        name: 'Padosi',
    },
    {
        id: 3,
        name: 'Dost',
    },
    {
        id: 4,
        name: 'Amitabh Bachchan',
    }
]

const AddModal = ({ modalData }) => {

    const { handleSubmitFn = () => null } = modalData;
    const [amount, setAmount] = useState(0);
    const [amountHasError, setAmountHasError] = useState(false);
    const [amountErrorText, setAmountErrorText] = useState(null);

    const [sendToObj, setSendToObj] = useState(null);
    const [SendToHasError, setSendToHasError] = useState(false);
    const [sendToErrorText, setSendToErrorText] = useState(null);



    function setAmountErrorStates(errorMsg = null) {
        setAmountHasError(true);
        setAmountErrorText(errorMsg);
    }

    function resetAmountErrorStates() {
        setAmountHasError(false);
        setAmountErrorText(null);
    }

    function handleNameField(value) {
        setAmount(value);

        if (checkForNumberWithDecialAllowed(value)) {
            if (value < 0) {
                setAmountErrorStates('Invalid input, Please enter postive number only')
            } else {
                const onlyPositiveDecimalNum = getNumberWithDecimal(value);
                setAmount(onlyPositiveDecimalNum);

                if (amountHasError) resetAmountErrorStates();
            }
        } else if (value < 0) {
            setAmountErrorStates('Invalid input, Please enter postive number only')
        } else if ((value + '').length === 0) {
            setAmountErrorStates('Please enter an amount')
        } else {
            setAmountErrorStates(`Invalid input entered`)
        }
    }

    function handleSendToClick(selectedOption){
        setSendToObj(selectedOption);
    }

    function onSubmitClick() {
        handleSubmitFn({ amount, sendToObj });
    }


    return (
        <KeyboardAvoidingView className='h-full relative'>
            <View className='mb-4'>
                <Text className='font-bold mb-2' >Amount</Text>
                <TextInput
                    onChangeText={handleNameField}
                    value={amount}
                    placeholder='Enter Amount'
                    keyboardType='numeric'
                    inputMode='numeric'
                    maxLength={10}
                    defaultValue={''}
                    className={`rounded-md border ${amountHasError && amountErrorText ? 'border-red-500' : 'border-neutral-300'}`}
                />
                {amountHasError && <Text className='text-sm text-red-500' >{amountErrorText}</Text>}
            </View>
            <View className='mb-4'>
                <Text className='font-bold mb-2' >Send To</Text>
                <DropDown
                    options={SEND_TO_USERS_LIST}
                    hasError={false}
                    errorText={null}
                    value={sendToObj}
                    onSelectOption={handleSendToClick}
                />
            </View>
            <View className='absolute bottom-0 flex flex items-center w-full'>
                <View className='w-3/5 pb-4' >
                    <Button
                        onPress={onSubmitClick}
                        title='Add Money'
                        disabled={amountHasError || !amount}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default AddModal;