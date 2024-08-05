import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { HomeSlides, CarSlideshow } from '@/components';


const Home: React.FC = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <ScrollView className="bg-black flex-1">
        <View className="w-full justify-center px-6 mt-12">
          <Text className="text-xl text-white font-bold mb-8">
            Start your <Text className="text-rose-400">CarQuest</Text> journey today!
          </Text>
          {/* Sliding Widgets */}
          <HomeSlides />
          {/* Vehicle Slideshow */}
          <CarSlideshow />
        </View>
        <StatusBar backgroundColor='#161622' style='light' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
