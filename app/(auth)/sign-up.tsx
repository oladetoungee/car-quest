import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';
import {createUser}  from '@/lib/appwrite';
import { StatusBar } from 'expo-status-bar';

const SignUp: React.FC = () => {
    const [form, setForm] = useState({username: '', email: '', password: '' });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const handleSignUp = () => {
      if(!form.username || !form.email || !form.password) {
        console.log('Please fill in all fields');
      }
      setIsSubmitting(true);
      try {
        createUser(form.email, form.password, form.username);
        // router.push('/home');
      } catch (error) {
        
      }
      finally {
        setIsSubmitting(false);
      }
     
 
    };
   

    return (
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
            <ScrollView className='bg-black h-[100vh]'>
                <View className='w-full justify-center min-h-[85vh] px-6 my-6'>
                    <View className='flex items-center justify-center'>
                        <Image
                            source={images.logo}
                            className='w-[120px] h-[120px] rounded-full'
                            resizeMode='contain'
                        />
                    </View>
                    <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
                        Sign Up to <Text className='text-rose-400'>CarQuest</Text>
                    </Text>
                    <FormField
                        label="Username"
                        value={form.username}
                        onChangeText={(username) => setForm({ ...form, username })}
                        placeholder="Enter your username"
                    />
                    <FormField
                        label="Email"
                        value={form.email}
                        onChangeText={(email) => setForm({ ...form, email })}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                    />
                    <FormField
                        label="Password"
                        value={form.password}
                        onChangeText={(password) => setForm({ ...form, password })}
                        placeholder="Enter your password"
                        secureTextEntry
                    />
                    <CustomButton title='Sign Up' onPress={handleSignUp} isLoading={isSubmitting} />
                    <View className='flex-row justify-center mt-4'>
                        <Text className='text-white'>Have an account already?</Text>
                        <Link href='/sign-in' className='text-rose-300 ml-1'>Sign In</Link>
                    </View>
                </View>
                <StatusBar backgroundColor='#161622' style='light' />
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignUp;
