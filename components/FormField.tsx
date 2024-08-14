import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface FormFieldProps extends TextInputProps {
    label: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, secureTextEntry, ...textInputProps }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View className='mb-4 mt-4 border-gray-200 bg-black-500 text-white'>
            <Text className='text-rose-400 text-sm mb-2'>{label}</Text>
            <View className='flex-row items-center rounded-lg bg-white w-full'>
                <TextInput
                    className='p-4 w-[90%]'
                    secureTextEntry={secureTextEntry && !isPasswordVisible}
                    placeholderTextColor="#aaa"
                    autoCapitalize='none' 
                    {...textInputProps}
                />
                {secureTextEntry && (
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Ionicons
                            name={isPasswordVisible ? 'eye-off' : 'eye'}
                            size={18}
                            color="black"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;
