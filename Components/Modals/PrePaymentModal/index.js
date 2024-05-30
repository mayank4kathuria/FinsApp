import React, { useState, useEffect } from 'react';

import {
    Button,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from 'react-native';

import { checkForNumberWithDecialAllowed, getNumberWithDecimal } from '../../../Utils /numericUtils';
import DropDown from '../../DropDown';

const PRE_PAYMENT_CSTEGORY_LIST = [
    {
        id: 1,
        label: 'Internet',
        value: 'INTERNET',
    },
    {
        id: 2,
        label: 'Entertainment',
        value: 'ENTERTAINMENT',
    },
    {
        id: 3,
        label: 'Investment',
        value: 'INVESTMENT',
    },
    {
        id: 4,
        label: 'Utilities',
        value: 'UTILITIES',
    }
]

const PrePaymentModal = ({ modalData }) => {

    const { handleSubmitFn = () => null, allowToModify = true, prePaymentNameValue = '', prePaymentAmountValue = '', prePaymentCategoryObj = null } = modalData;

    const [isEditable, setIsEditable] = useState(true);

    const [prePaymentName, setPrePaymentName] = useState('');
    const [prePaymentHasError, setPrePaymentHasError] = useState(false);
    const [prePaymentErrorText, setPrePaymentErrorText] = useState(null);
 
    const [categoryObj, setCategoryObj] = useState(null);
    const [categoryHasError, setCategoryHasError] = useState(false);
    const [categoryErrorText, setCategoryErrorText] = useState(null);
    
    const [amount, setAmount] = useState('');
    const [amountHasError, setAmountHasError] = useState(false);
    const [amountErrorText, setAmountErrorText] = useState(null);

    useEffect(() => {
        // Set Defaults state from props

        if (!!prePaymentNameValue && (!!prePaymentAmountValue || prePaymentAmountValue === 0) && !!prePaymentCategoryObj?.value) setIsEditable(false);
        else setIsEditable(allowToModify);

        if (!!prePaymentNameValue) setPrePaymentName(prePaymentNameValue);
        if (!!prePaymentAmountValue || prePaymentAmountValue === 0) setAmount(prePaymentAmountValue);
        if (!!prePaymentCategoryObj?.value) setCategoryObj(prePaymentCategoryObj);


    }, []);


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

    function resetCategoryStates() {
        setCategoryHasError(false);
        setCategoryErrorText(null);
    }

    function handleCategoryClick(selectedOption) {
        setCategoryObj(selectedOption);

        if (categoryHasError) resetCategoryStates();
    }

    function resetPrePaymentStates() {
        setPrePaymentHasError(false);
        setPrePaymentErrorText(null);
    }

    function handlePrePaymentName(value) {
        setPrePaymentName(value);

        if (prePaymentHasError) resetPrePaymentStates();
    }

    function onSubmitClick() {
        let hasAnyError = false;

        if (prePaymentName === '' || prePaymentName === null) {
            hasAnyError = true;
            setPrePaymentHasError(true);
            setPrePaymentErrorText('This field is required.');
        }
        if (categoryObj === null) {
            hasAnyError = true;
            setCategoryHasError(true);
            setCategoryErrorText('This field is required.');
        }
        if (amount === '' || amount === null) {
            hasAnyError = true;
            handleNameField('');
        }

        if (!hasAnyError) handleSubmitFn({ amount, categoryObj, prePaymentName });
    }

    function toggleIsEditable() {
        setIsEditable(true);
    }


    return (
        <KeyboardAvoidingView className='h-full relative'>
            <View className='mb-4'>
                <Text className='font-bold mb-2' >Pre Payment Name</Text>
                <TextInput
                    onChangeText={handlePrePaymentName}
                    value={prePaymentName}
                    placeholder='Enter pre payment name'
                    // keyboardType='numeric'
                    // inputMode='numeric'
                    disabled={!isEditable}
                    maxLength={20}
                    defaultValue={''}
                    className={`rounded-md border ${prePaymentHasError && prePaymentErrorText ? 'border-red-500' : 'border-neutral-300'}`}
                />
                {prePaymentHasError && <Text className='text-sm text-red-500' >{prePaymentHasError}</Text>}
            </View>
            <View className='mb-4'>
                <Text className='font-bold mb-2' >Pre Payment Category</Text>
                <DropDown
                    options={PRE_PAYMENT_CSTEGORY_LIST}
                    hasError={categoryHasError}
                    errorText={categoryErrorText}
                    value={categoryObj}
                    disabled={!isEditable}
                    onSelectOption={handleCategoryClick}
                />
            </View>
            <View className='mb-4'>
                <Text className='font-bold mb-2' >Amount</Text>
                <TextInput
                    onChangeText={handleNameField}
                    value={amount}
                    placeholder='Enter Amount'
                    keyboardType='numeric'
                    inputMode='numeric'
                    maxLength={10}
                    // defaultValue={''}
                    disabled={!isEditable}
                    className={`rounded-md border ${amountHasError && amountErrorText ? 'border-red-500' : 'border-neutral-300'}`}
                />
                {amountHasError && <Text className='text-sm text-red-500' >{amountErrorText}</Text>}
            </View>
            <View className='absolute bottom-0 flex items-center w-full'>
                <View className='w-3/5 pb-4' >
                    <Button
                        onPress={onSubmitClick}
                        title='Modify / Save Pre Payment'
                        disabled={amountHasError || categoryHasError || prePaymentHasError || !isEditable}
                    />
                </View>
                {allowToModify && !isEditable && <View className='ml-4 pb-4' >
                    <TouchableHighlight onPress={toggleIsEditable} >
                        <Text>Edit ICON</Text>
                    </TouchableHighlight>
                </View>}
            </View>
        </KeyboardAvoidingView>
    );
}

export default PrePaymentModal;