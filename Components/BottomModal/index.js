import React, { useRef } from 'react';

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
    Animated,
    PanResponder
} from 'react-native';
import { transform } from 'typescript';

function BottomModal({ visible = true, onClose = () => null, children = null, headingLabelText = null, showBackBtn = false,
    handleBackBtn = () => null, containerStyle = null }) {

    /* const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            // onMoveShouldSetPanResponder: () => true, TODO: implement pan responder
            onPanResponderMove: Animated.event([null, { dy: pan.y }], { useNativeDriver : true }),
            onPanResponderRelease: () => {
                pan.extractOffset();
            }
        })
    ).current; */

    return (
        <Modal
            animationType="slide"
            visible={visible}
            transparent={true}
        >
            <View className='h-full bg-neutral-300/70 flex relative' >
                <Animated.View className={`absolute bottom-0 bg-white w-full rounded-t-2xl p-4 h-1/2 ${containerStyle}`}
                // style={{ transform: { translateY: pan.y } }} TODO: implement pan responder
                // {...panResponder.panHandlers}
                >
                    <View className='flex flex-row justify-between items-center' >
                        {!!headingLabelText && (<Text className='text-black font-bold text-xl ' >{headingLabelText}</Text>)}
                        {showBackBtn && (<TouchableOpacity onPress={handleBackBtn} >
                            <Text className='text-black font-bold text-xl pl-2 pb-2' >{"<--"}</Text>
                        </TouchableOpacity>)}
                        {!headingLabelText && !showBackBtn && <View></View>}

                        <TouchableOpacity onPress={onClose} >
                            <Text className='text-2xl text-slate-800 px-2 rounded-2xl relative bg-neutral-300 rotate-45' >+</Text>
                        </TouchableOpacity>

                    </View>

                    <View className='py-2' >
                        {children}
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
}

export default BottomModal;