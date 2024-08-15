import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useGlobalContext } from '@/context/GlobalProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { signOut } from '@/lib/appwrite';
import { Booking } from '@/lib/definitions';
import { router } from "expo-router";
import { carData } from '@/data/carData'; // Import carData

const ProfileScreen: React.FC = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Function to handle logout
  const handleLogout = async () => {
    setShowLogoutModal(false);
    await signOut();
    setUser(null);
    setIsLoggedIn(false);
    router.replace("/sign-in");
  };

  // Function to load user's bookings from AsyncStorage
  const loadBookings = async () => {
    try {
      const storedBookings = await AsyncStorage.getItem('bookings');
      if (storedBookings) {
        setBookings(JSON.parse(storedBookings));
      }
    } catch (error) {
      console.error('Error loading bookings:', error);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const getInitials = (name: string) => {
    const initials = name.split(' ').map((word) => word[0]).join('');
    return initials.toUpperCase();
  };




  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <View className='flex-1 pt-24'>

        {/* Profile Header */}
        <View className='flex-row justify-between items-center mb-12 px-4'>
          <View className='flex-row items-center'>
            <View className='w-16 h-16 bg-rose-400 rounded-full justify-center items-center mr-4'>
              <Text className='text-white text-3xl font-bold'>
                {getInitials('Gbemi Ola')}
              </Text>
            </View>
            <Text className='text-white text-2xl font-bold'>Gbemi Ola</Text>
          </View>
          {/* Logout Button */}
          <TouchableOpacity onPress={() => setShowLogoutModal(true)} className='flex-row items-center'>
            <Ionicons name="log-out-outline" size={20} color="white" />
            <Text className='text-white text-xs font-bold ml-2'>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View className='flex-1 items-center p-4'>
          {bookings.length === 0 ? (
            <View className='flex-1 justify-center items-center'>
              <Text className='text-gray-400 text-base text-center mb-4'>
                You haven't booked any rentals. Head over to the rentals page to rent any car of your choice.
              </Text>
              <TouchableOpacity 
                onPress={() => router.push('/rentals')} 
                className='bg-rose-400 p-3 rounded-lg'
              >
                <Text className='text-white font-bold'>Go to Rentals</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
            <Text className='text-white text-xl font-bold mb-4'>
            You have booked {bookings.length} rentals so far!
            </Text>
            <ScrollView className='w-full'>
              {bookings.map((booking, index) => (
                <View key={index} className='bg-gray-800 p-4 rounded-lg mb-4 mx-2'>
              
                  <Text className='text-rose-400 text-lg font-bold mb-2'>{booking?.carName}</Text>
                  <Text className='text-white text-base'>Hours: {booking?.hours}</Text>
                  <Text className='text-white text-base'>Total Amount Paid: NGN{booking?.totalAmount}</Text>
                  <Text className='text-gray-400 text-sm'>Date: {new Date(booking?.date).toLocaleString()}</Text>
                  <TouchableOpacity 
                    onPress={() => router.push(`/car/${booking?.carId}`)} 
                    className='bg-rose-400 p-2 rounded-lg mt-4'
                  >
                    <Text className='text-white text-center font-bold'>Re-Rent Car</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            </>
          )}
        </View>

        {/* Logout Confirmation Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showLogoutModal}
          onRequestClose={() => setShowLogoutModal(false)}
        >
          <View className="flex-1 justify-center items-center bg-black bg-opacity-70">
            <View className="bg-coffee p-6 rounded-lg w-80">
              <Text className="text-white text-lg mb-4">Are you sure you want to log out?</Text>
              <View className="flex-row justify-between">
                <TouchableOpacity onPress={() => setShowLogoutModal(false)} className="flex-1">
                  <Text className="text-rose-400 text-base text-center">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout} className="flex-1">
                  <Text className="text-rose-400 text-base text-center">Log Out</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
};

export default ProfileScreen;
