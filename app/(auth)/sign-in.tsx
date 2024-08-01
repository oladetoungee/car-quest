import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { getCurrentUser, signIn } from '@/lib/appwrite';
import { Link, router } from 'expo-router';
import { useGlobalContext } from '@/context/GlobalProvider';
import { StatusBar } from 'expo-status-bar';

const SignIn: React.FC = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const {isLoggedIn, isLoading, setUser, setIsLoggedIn} = useGlobalContext();
    const handleSignIn = async () => {
        if( !form.email || !form.password) {
            console.log('Please fill in all fields');
          }
          setIsSubmitting(true);
          try {
           await signIn(form.email, form.password);
           const result = await getCurrentUser() as any
           setUser(result);
           setIsLoggedIn(true);
           Alert.alert('Success', 'You have successfully signed in');
            router.replace('/home');
          } catch (error: Error | any) {
            Alert.alert('Error', error.message);
          }
          finally {
            setIsSubmitting(false);
          }
         
     
    };
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
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
                        Sign In to <Text className='text-rose-400'>CarQuest</Text>
                    </Text>
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
                    <CustomButton title='Sign In' onPress={handleSignIn} isLoading={isSubmitting} />
                    <View className='flex-row justify-center mt-4'>
                        <Text className='text-white'>Don't have an account?</Text>
                        <Link href='/sign-up' className='text-rose-300 ml-1'>Sign Up</Link>
                    </View>
                </View>
                <StatusBar backgroundColor='#161622' style='light' />
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignIn;
