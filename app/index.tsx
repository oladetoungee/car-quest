import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import "@/global.css"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';
import { Redirect, router } from 'expo-router'
import { useGlobalContext } from '@/context/GlobalProvider';
import { checkAndClearStorage } from '../app/utils/storageManager';
export default function HomeScreen() {
  const { isLoggedIn, isLoading } = useGlobalContext();
  if (!isLoading && isLoggedIn) {
    return <Redirect href='/home' />
  }
  useEffect(() => {
    checkAndClearStorage();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
        <ScrollView className='bg-black' contentContainerStyle={{ height: '100%' }}>
          <View className='w-full h-full justify-center items-center min-h-[85vh] px-4 py-0'>
            <Image
              source={images.logo}
              className='w-[120px] h-[120px] rounded-full'
              resizeMode='contain' />
            <Image
              source={images.carHome}
              className='w-[90%] h-[300px]'
              resizeMode='contain'
            />
            <View className='relative '>
              <Text className='text-white text-3xl font-bold'>
                Welcome to
                <Text className='text-rose-400'>  CarQuest</Text>
              </Text>

            </View>
            <View className='mt-4'>
              <Text className='text-white px-4 py-1 rounded-md'>
                Your Premium and Luxury Car Rental Home
              </Text>
              <CustomButton title='Get Started' onPress={() => router.push('/sign-in')}  />
            </View>
          </View>
          <StatusBar backgroundColor='#161622' style='light' />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
