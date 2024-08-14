import React from 'react';
import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import the icon set you want to use
import { StatusBar } from 'expo-status-bar';

interface TabIconProps {
  icon: keyof typeof Ionicons.glyphMap; 
  color: string;
  focused: boolean;
  name: string;
}

const TabIcon: React.FC<TabIconProps> = ({ name, color, focused, icon }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Ionicons name={icon} size={18} color={color} /> 
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
          tabBarActiveTintColor: 'rose',
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
                name="Home" 
                color={color}
                focused={focused}
                icon='home-outline'
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
                name="Rentals" 
                color={color}
                focused={focused}
                icon="car-outline"
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
                name="Profile"
                color={color}
                focused={focused}
                icon='person-outline'
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
