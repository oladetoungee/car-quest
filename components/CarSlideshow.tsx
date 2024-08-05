// CarSlideshow.tsx

import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { carData } from '@/data/carData'; // Ensure the path is correct
import { CarData } from '@/lib/definitions';

const CarSlideshow: React.FC = () => {
  return (
    <View className="mt-10">
      <Text className="text-2xl text-rose-400 font-bold">Our Vehicles</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className=""
      >
        {carData.map((car: CarData, index: number) => (
          <View
            key={index}
            className="w-48 bg-gray-800 p-4 rounded-lg mr-4"
          >
            <Image
              source={car.image}
              className="w-full h-40"
              resizeMode="contain"
            />
            <Text className="text-xl text-white mt-2">{car.name}</Text>
            <Text className="text-white">{car.transmission} - {car.model}</Text>
            <Text className="text-white">${car.rentalRatePerHour}/hour</Text>
            <Text className="text-white text-sm mt-1">{car.additionalInfo}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CarSlideshow;
