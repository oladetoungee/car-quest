import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { slidesData } from './slidesData';
import { StatusBar } from 'expo-status-bar';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <ScrollView className="bg-black flex-1">
        <View className="w-full justify-center px-6 mt-12">
          <Text className="text-xl text-white font-bold mb-8">
            Start your <Text className="text-rose-400">CarQuest</Text> journey today!
          </Text>

          {/* Sliding Widgets */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
            {slidesData.map((slide, index) => (
              <View
                key={index}
                className="w-[300px] bg-matteblack px-5 pt-5 pb-2 rounded-lg mr-4 opacity-90 shadow-lg"
              >
                <Image
                  source={slide.image}
                  className="w-full h-[150px] rounded-t-lg object-cover mb-2"
                  resizeMode="cover"
                />
                <Text className="text-lg text-white font-bold mb-1">
                  {slide.title}
                </Text>
                <Text className="text-sm text-white">
                  {slide.description}
                </Text>
                <View className="flex flex-row justify-between items-center mt-8">
                  <Text className="text-rose-200">{slide.buttonText}</Text>
                  <MaterialIcons name="arrow-right-alt" size={24} color="white" />
                </View>
              </View>
            ))}
          </ScrollView>
          {/* Vehicle Slideshow */}
          <View className="mt-10">
            <Text className="text-2xl text-rose-400 font-bold">Our Vehicles</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
              <View className="w-[200px] bg-gray-800 p-4 rounded-lg mr-4">
                <Image source={images.logo} className="w-full h-[150px]" resizeMode="contain" />
                <Text className="text-xl text-white mt-2">Toyota Corolla</Text>
                <Text className="text-white">Sedan</Text>
              </View>
              <View className="w-[200px] bg-gray-800 p-4 rounded-lg mr-4">
                <Image source={images.logo} className="w-full h-[150px]" resizeMode="contain" />
                <Text className="text-xl text-white mt-2">Honda Civic</Text>
                <Text className="text-white">Sedan</Text>
              </View>
              {/* Add more vehicles as needed */}
            </ScrollView>
          </View>
        </View>
        <StatusBar backgroundColor='#161622' style='light' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
