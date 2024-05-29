import React, { useState } from 'react';

import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native';


function DropDown({ disabled = false, options = [], hasError = false, errorText = null, value = null, onSelectOption = () => null }) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function handleInputPress() {
        if (!disabled) setIsDrawerOpen(!isDrawerOpen);
        onSelectOption(null)
    }

    function onSelectingOption(selected) {
        if (!disabled) onSelectOption(selected);

        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <View className='relative' >
            {/* Input field which shows the selected optio */}
            <TouchableOpacity onPress={handleInputPress} >
                <View className='relative' >
                    <TextInput
                        className={`p-2 w-full bg-white rounded-lg text-black border ${hasError ? 'border-red-400' : 'border-neutral-300'}`}
                        editable={false}
                        placeholder={value?.label ? value?.label : 'Select an option'}
                        value={value?.label}
                    />
                    <Text className={`absolute right-0 text-neutral-500 top-4 mr-2 ${isDrawerOpen && 'rotate-180'}`} >V</Text>
                </View>
            </TouchableOpacity>
            {hasError && <Text className='text-red-400' >{errorText}</Text>}

            {/* A dropdown field which opens once clicked on input field, can select / change options from dropdowns  */}
            {
                isDrawerOpen && (<ScrollView className='max-h-40 absolute w-full top-14 pb-4 z-10' >
                    {options.map((option, index) =>
                        <TouchableOpacity
                            key={option.value + index}
                            onPress={() => onSelectingOption(option)}
                        >
                            <View className='px-2 py-3 bg-white font-medium border-b-2 border-neutral-200' >
                                <Text>{option.label}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {options.length === 0 &&
                        <View className='p-2 bg-white font-medium' >
                            <Text>No options to display</Text>
                        </View>}
                </ScrollView>)
            }
        </View >
    );
}

export default DropDown;