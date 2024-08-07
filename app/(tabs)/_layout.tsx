import React from 'react';
import { View, Text, Image, ImageProps } from 'react-native';
import { Tabs } from 'expo-router';
import { icons } from '@/constants'; 
import { StatusBar } from 'expo-status-bar';

type ImageSourcePropType = ImageProps['source'];

interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}


const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image source={icon} resizeMode='contain' style={{ tintColor: color, width: 18, height: 18 }} />
      <Text className={`${focused ? 'font-semibold' : 'font-normal'} p-1 text-xs`} style={{color: color}} >{name}</Text>
    </View>

  );
};

const TabsLayout = () => {
  return (
    <>
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: 'pink',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: 'black',
        borderTopWidth: 1,
        borderTopColor: 'transparent',
        height: 100,
      },
      headerShown: false,
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          
          ),
        }}
      />
        <Tabs.Screen
        name="rentals"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus} 
              color={color}
              name="Rentals"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile} 
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
        <StatusBar backgroundColor="#161622" style="light" />
        </>
  );
};

export default TabsLayout;
