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
      <View className='bg-white p-4' >
        <View>
          <Text>User details</Text>
        </View>
        <View>
          <Text>Available balance</Text>
        </View>

        <View>
          <View>
            <Text>Add Btn</Text>
          </View>
          <View>
            <Text>Send Btn</Text>
          </View>
          <View>
            <Text>Invest Btn 2</Text>
          </View>
        </View>

      </View>
      {/* <View className='flex justify-center items-center bg-white' >
        <Text className='bg-white' >Text 2</Text>
        <Text className='bg-white' >Text 2.1</Text>
      </View>
      <View >
        <Text>Text 3</Text>
      </View> */}
    </SafeAreaView>
  );
}

export default HomeScreen;

/*
<StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <Header />
        <View className="bg-white dark:bg-black" >
          <Section title="Step One">
            Edit <Text className="font-bold">App.js</Text> to change this
            screen and then come back to see your edits. Yes Working now
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
*/
