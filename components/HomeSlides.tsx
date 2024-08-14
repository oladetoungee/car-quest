import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { slidesData } from '@/data/slidesData';

const { height } = Dimensions.get('window');

const HomeSlides: React.FC = () => {
  const [selectedSlide, setSelectedSlide] = useState<null | number>(null);
  const translateY = useSharedValue(height);

  const openModal = (index: number) => {
    setSelectedSlide(index);
    translateY.value = withTiming(0, { duration: 500 });
  };

  const closeModal = () => {
    translateY.value = withTiming(height, { duration: 500 });
    setSelectedSlide(null);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View className="flex-1 bg-black">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
        {slidesData.map((slide, index) => (
          <View
            key={index}
            className="w-[300px] bg-gray-800 px-5 pt-5 pb-2 rounded-lg mr-4 opacity-90 shadow-lg"
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
            <TouchableOpacity
              className="flex flex-row justify-between items-center mt-8"
              onPress={() => openModal(index)}
            >
              <Text className="text-red-400">{slide.buttonText}</Text>
              <MaterialIcons name="arrow-right-alt" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Flip Modal */}
      <Animated.View style={[animatedStyle]} className="absolute bottom-0 left-0 right-0 h-[90%] bg-black bg-opacity-90 rounded-t-2xl z-10 p-4">
        {selectedSlide !== null && (
          <View className="flex-1 px-6">
            <Text className="text-xl text-white font-bold mb-2">
              {slidesData[selectedSlide].title}
            </Text>
            <Text className="text-base text-white mb-4">
              {slidesData[selectedSlide].content}
            </Text>
            <TouchableOpacity onPress={closeModal} className="mt-4">
              <Text className="text-red-400">Close</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

export default HomeSlides;
