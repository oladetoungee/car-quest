import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import { carData } from '@/data/carData';
import { CarData } from '@/lib/definitions';


export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const car = carData.find((car: CarData) => car.id === id);

  const [modalVisible, setModalVisible] = useState(false);

  if (!car) {
    return (
      <View className="flex-1 justify-center items-center p-4 bg-black">
        <Text className="text-white text-lg">Car not found</Text>
      </View>
    );
  }

  const handleBookNow = () => {
    setModalVisible(true);
  };

  const handleConfirmBooking = () => {
    setModalVisible(false);
    // Implement payment processing logic here
    Alert.alert('Booking confirmed', 'Your booking has been confirmed.');
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-black">
      <Image source={car.image} className="w-full h-48 rounded-lg mb-4" resizeMode="cover" />
      <Text className="text-2xl font-bold text-white mb-2">{car.name}</Text>
      <Text className="text-base text-gray-400 mb-2">{car.additionalInfo}</Text>
      <Text className="text-sm text-white mb-1">
        {car.transmission} - {car.model}
      </Text>
      <Text className="text-sm text-white mb-4">NGN {car.rentalRatePerHour}/hour</Text>

      <TouchableOpacity
        className="mt-5 bg-red-500 py-3 px-8 rounded-lg"
        onPress={handleBookNow}
      >
        <Text className="text-white text-lg font-bold">Book Now</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-transparent bg-opacity-50">
          <View className="w-4/5 bg-white p-5 rounded-lg items-center">
            <Text className="text-xl font-bold mb-4">Confirm Booking</Text>
            <Text className="text-base mb-4">Are you sure you want to book this car?</Text>
            <View className="flex-row justify-between w-full">
              <TouchableOpacity
                className="flex-1 bg-red-500 py-2 mx-1 rounded-lg items-center"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-white text-base">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 bg-red-500 py-2 mx-1 rounded-lg items-center"
                onPress={handleConfirmBooking}
              >
                <Text className="text-white text-base">Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
