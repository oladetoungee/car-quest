import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { carData } from '@/data/carData';
import { CarData } from '@/lib/definitions';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CarSlideshow: React.FC = () => {
  const displayedCars = carData.slice(0, 6);

  return (
    <View className="mt-10 px-4">
      <View className="flex flex-row items-center mb-4">
        <MaterialIcons name="directions-car" size={36} color="#f56565" className="mr-2" />
        <Text className="text-3xl font-extrabold text-rose-400 ml-2">Our Vehicles</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
      >
        {displayedCars.map((car: CarData, index: number) => (
          <View
            key={index}
            className="w-64 mx-2 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              source={car.image}
              className="w-full h-40"
              resizeMode="cover"
            />
            <View className="px-4 py-2">
              <Text className="text-lg font-semibold text-gray-800">{car.name}</Text>
              <View className="flex flex-row items-center justify-between mt-1">
                <Text className="text-gray-600 text-sm">
                  {car.transmission} - <Text className='text-xs'>{car.model}</Text>
                </Text>
                <MaterialIcons name="directions-car-filled" size={16} color="#f56565" />
              </View>
              <View className="flex flex-row items-center justify-between mt-1">
                <Text className="text-gray-600 text-xs">
                  NGN {car.rentalRatePerHour}/hour
                </Text>
                <MaterialIcons name="money" size={16} color="#f56565" />
              </View>
            </View>
          </View>
        ))}
        <TouchableOpacity
          className="w-64 mx-2 bg-gray-200 shadow-lg rounded-lg overflow-hidden justify-center items-center p-4"
          onPress={() => {
            // Navigate to the cars page (replace with your navigation logic)
            console.log('Navigate to Cars Page');
          }}
        >
          <MaterialIcons name="more-horiz" size={48} color="#f56565" />
          <Text className="text-lg font-semibold text-rose-600 mt-2">See More</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CarSlideshow;
