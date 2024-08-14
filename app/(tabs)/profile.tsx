import React from 'react';
import { router } from "expo-router";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useGlobalContext } from '@/context/GlobalProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { signOut } from '@/lib/appwrite';


const ProfileScreen: React.FC = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();

  // Function to handle logout
  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <View className='flex-1 p-4'>
        <TouchableOpacity onPress={logout}>
          <Ionicons name="log-out-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text className='text-3xl text-white font-bold mb-6'>Profile</Text>
        <View className='w-16 h-16 border border-secondary rounded-lg flex justify-center items-center'>
          {/* <Image
            source={{ uri: user?.avatar }}
            className='w-[90%] h-[90%] rounded-lg'
            resizeMode='cover'
          /> */}
        </View>
        {/* <Text className='text-white text-xl mt-4'>{user?.username}</Text> */}
      </View>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
};

export default ProfileScreen;
