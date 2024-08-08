import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { carData } from '@/data/carData';
import { CarData } from '@/lib/definitions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
const CarRentalsPage: React.FC = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <ScrollView className="bg-black flex-1">
      <View className="px-4 py-6">
        <Text className="text-3xl font-extrabold text-rose-400">All Vehicles</Text>
      </View>
  
        {carData.map((car: CarData, index: number) => (
          <View
            key={index}
            className="mb-4 mx-4 bg-matteblack shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              source={car.image}
              className="w-full h-48"
              resizeMode="cover"
            />
            <View className="px-4 py-2">
              <Text className="text-lg font-bold text-white">{car.name}</Text>
              <Text className="text-sm font-semibold text-white">{car.additionalInfo}</Text>
              <View className="flex flex-row items-center justify-between mt-1">
                <Text className="text-rose-400 text-sm">
                  {car.transmission} - <Text className="text-xs">{car.model}</Text>
                </Text>
                <Text className="text-rose-400  text-xs">
                  NGN {car.rentalRatePerHour}/hour
                </Text>
              </View>
            
              <TouchableOpacity
                className="mt-4 bg-rose-400 rounded-lg p-3"
                onPress={() => {
                  console.log(`Navigating to /car/${car.id}`);
                  router.push(`/car/${car.id}`);
                }}
              >
                <Text className="text-white text-center text-lg font-semibold">Book Car</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
   <StatusBar backgroundColor='#161622' style='light' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CarRentalsPage;
