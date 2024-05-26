import React from 'react';

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

function BottomModal({ visible = true, onClose = () => null, children = null, headingLabelText = null, showBackBtn = false, handleBackBtn = () => null }) {


    return (
        <Modal
            animationType="slide"
            visible={visible}
            transparent={true}
        >
            <View className='h-full bg-neutral-300/70 flex relative' >
                <ScrollView className='absolute bottom-0 bg-white w-full rounded-t-2xl p-4 h-1/2' >
                    <View className='flex flex-row justify-between items-center bg-black/40 p-2' >
                        {!!headingLabelText && (<Text className='text-black font-bold text-xl ' >{headingLabelText}</Text>)}
                        {showBackBtn && (<Text className='text-black font-bold text-xl ' >Back CTA</Text>)}
                        <TouchableOpacity onPress={onClose} >
                            <Text className='text-2xl text-slate-800 px-2 rounded-2xl relative bg-neutral-300 rotate-45' >+</Text>
                        </TouchableOpacity>
                    </View>

                    <View className='y-40'>
                        <Text>Here goes the modal text</Text>
                    </View>
                    {children}
                </ScrollView>
            </View>
        </Modal>
    );
}

export default BottomModal;