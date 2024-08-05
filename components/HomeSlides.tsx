import React from 'react';
import { slidesData } from '@/data/slidesData';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const HomeSlides
: React.FC = () => {
    return (
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
            <TouchableOpacity  className="flex flex-row justify-between items-center mt-8">
              <Text className="text-rose-200">{slide.buttonText}</Text>
              <MaterialIcons name="arrow-right-alt" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  };
  
  export default HomeSlides
  ;
  