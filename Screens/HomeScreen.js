import React from 'react';
// import type { PropsWithChildren } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
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

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  // const navigatorFn = navigation.navigate;

  const backgroundStyle = "bg-neutral-100 bg-blacky h-screen dark:bg-slate-900 p-4"

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
          <Text className='text-2xl text-black font-bold' >$ 10,000.78</Text>
        </View>

        <View className='flex flex-row justify-between items-center py-2'>
          <View className='p-2 flex-1 items-center mr-2 border border-neutral-100 rounded-xl' >
            <Text>Add Image</Text>
            <Text className='text-black font-medium' >Add</Text>
          </View>
          <View className='p-2 flex-1 items-center mr-2 border border-neutral-100 rounded-xl' >
            <Text>Send Image</Text>
            <Text className='text-black font-medium' >Send</Text>
          </View>
          <View className='p-2 flex-1 items-center border border-neutral-100 rounded-xl' >
            <Text>Invest Image</Text>
            <Text className='text-black font-medium' >Invest</Text>
          </View>
        </View>

      </View>

      <View className='bg-neutral-100 mb-8' >
        <View className='flex flex-row justify-between items-center mb-4' >
          <Text className='text-xl text-black font-bold' >Monthly Payments</Text>
          <Text className='bg-white rounded px-2 text-indigo-400 font-bold' >View all</Text>
        </View>
        <ScrollView horizontal contentInsetAdjustmentBehavior="automatic">
          <View className='w-36 flex flex-row bg-white items-center p-1 border border-neutral-100 rounded-3xl mr-2' >
            <View className='flex-1 px-2 rounded-3xl mr-2'>
              <Text>Image</Text>
            </View>
            <View className='flex-[2_0_0] px-2'>
              <Text className='text-black font-bold' >Internet</Text>
              <Text className='text-neutral-500 font-medium' >$40</Text>
            </View>
          </View>
          <View className='w-36 flex flex-row bg-white items-center p-1 border border-neutral-100 rounded-3xl mr-2' >
            <View className='flex-1 px-2 rounded-3xl mr-2'>
              <Text>Image</Text>
            </View>
            <View className='flex-[2_0_0] px-2'>
              <Text className='text-black font-bold' >Tv Set</Text>
              <Text className='text-neutral-500 font-medium' >$25</Text>
            </View>
          </View>
          <View className='w-36 flex flex-row bg-white items-center p-1 border border-neutral-100 rounded-3xl mr-2' >
            <View className='flex-1 px-2 rounded-3xl mr-2'>
              <Text>Image</Text>
            </View>
            <View className='flex-[2_0_0] px-2'>
              <Text className='text-black font-bold' >XBox</Text>
              <Text className='text-neutral-500 font-medium' >$60</Text>
            </View>
          </View>
          <View className='w-36 flex flex-row bg-white items-center p-1 border border-neutral-100 rounded-3xl mr-2' >
            <View className='flex-1 px-2 rounded-3xl mr-2'>
              <Text>Image</Text>
            </View>
            <View className='flex-[2_0_0] px-2'>
              <Text className='text-black font-bold' >Food</Text>
              <Text className='text-neutral-500 font-medium' >$80</Text>
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
      </View>

    </SafeAreaView>
  );
}

export default HomeScreen;