import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Alert, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { carData } from '@/data/carData';
import { CarData } from '@/lib/definitions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const car = carData.find((car: CarData) => car.id === id);

  const [modalVisible, setModalVisible] = useState(false);
  const [hours, setHours] = useState(1); // default to 1 hour
  const [totalAmount, setTotalAmount] = useState(car ? car.rentalRatePerHour : 0);

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

  const handleConfirmBooking = async () => {
    const bookingData = {
      carId: car.id,
      carName: car.name,
      hours,
      totalAmount,
      date: new Date().toISOString(),
    };

    try {
      const storedBookings = await AsyncStorage.getItem('bookings');
      const bookings = storedBookings ? JSON.parse(storedBookings) : [];
      bookings.push(bookingData);
      await AsyncStorage.setItem('bookings', JSON.stringify(bookings));
      Alert.alert('Booking confirmed', 'Your booking has been confirmed.');
    } catch (error) {
      console.error('Error storing booking data:', error);
      Alert.alert('Error', 'Failed to store booking data.');
    }

    setModalVisible(false);
    
  };

  const handleHoursChange = (value: any) => {
    const hours = parseInt(value, 10);
    if (!isNaN(hours) && hours > 0) {
      setHours(hours);
      setTotalAmount(hours * car.rentalRatePerHour);
    } else {
      setHours(0);
      setTotalAmount(0);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
    <View className="flex-1 bg-black">
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', top: 20, left: 20, zIndex: 10 }}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      <View className={`flex-1 justify-center items-center p-4 ${modalVisible ? 'opacity-20' : 'opacity-100'}`}>
        <Text className="text-xl font-extrabold text-rose-400 text-center mb-8">
          A {car.name} is available at our Ikeja Station
        </Text>
        <Image
          source={car.image}
          className="w-full h-64 rounded-lg shadow-lg mb-4"
          resizeMode="cover"
        />
        <Text className="text-2xl font-bold text-white mb-0">{car.name}</Text>
        <Text className="text-base text-gray-400 mb-2">{car.additionalInfo}</Text>
        <Text className="text-sm text-white mb-1">
          {car.transmission} - {car.model}
        </Text>
        <Text className="text-sm text-white mb-4">NGN {car.rentalRatePerHour} per hour</Text>

        <TouchableOpacity
          className="mt-5 bg-rose-400 py-3 px-8 rounded-full shadow-md"
          onPress={handleBookNow}
        >
          <Text className="text-white text-lg font-bold">Book Now</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-70">
          <View className="w-4/5 bg-white p-6 rounded-lg shadow-xl">
            <Text className="text-xl font-bold mb-4 text-center">Confirm Booking</Text>
            <Text className="text-base mb-6 text-center">How many hours do you want to rent the car for?</Text>
            <TextInput
              style={{ width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingLeft: 10, marginBottom: 10 }}
              keyboardType="numeric"
              value={String(hours)}
              onChangeText={handleHoursChange}
            />
            <Text className="text-base mb-4 text-center">Total Amount: NGN {totalAmount}</Text>
            <View className="flex-row justify-around">
              <TouchableOpacity
                className="flex-1 bg-gray-200 py-2 mx-2 rounded-full items-center shadow"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-black text-base">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 bg-rose-400 py-2 mx-2 rounded-full items-center shadow"
                onPress={handleConfirmBooking}
              >
                <Text className="text-white text-base">Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
