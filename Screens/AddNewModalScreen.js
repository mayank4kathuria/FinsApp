import React, { useState, useEffect } from 'react';
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

// import {
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({ children, title }: SectionProps): React.JSX.Element {
//   return (
//     <View className="mt-8 px-2" >
//       <Text className="text-2xl text-black dark:text-white" >
//         {title}
//       </Text>
//       <Text className="mt-2 text-lg text-black dark:text-white">
//         {children}
//       </Text>
//     </View>
//   );
// }
// : React.JSX.Element

// type PropTypeStruc = { navigation: { navigate: Function } };

function AddNewModalScreen({ navigation }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);



  return (
    <View>
      {/* <Modal
        animationType="slide"
        visible={isModalOpen}> */}
      <ScrollView className='p-4' >
        <View className='flex flex-row justify-between items-center' >
          <Text className='text-black font-bold text-xl ' >Modal</Text>
          {/* <TouchableOpacity onPress={() => navigation.goBack()} > */}
          <TouchableOpacity onPress={navigation.goBack} >
            <Text className='text-2xl text-slate-800 px-2 rounded-2xl relative bg-neutral-300 rotate-45' >+</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>Here goes the modal text</Text>
        </View>
      </ScrollView>
      {/* </Modal> */}
    </View>
  );
}

export default AddNewModalScreen;