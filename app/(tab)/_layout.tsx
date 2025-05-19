import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';

const TabRoot = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index"options={{ title:"Courses",headerShown: false,tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,}} />
        <Tabs.Screen name="about"options={{title:"settings",headerShown: false,tabBarIcon: ({color}) => <Feather size={28} name="settings" color={color} />}} />
        <Tabs.Screen name="leaderboard"options={{title:"leaderboard",headerShown: false,tabBarIcon: ({color}) => <MaterialIcons  size={28} name="leaderboard" color={color} />}} />
    </Tabs>
    
  );
};

export default TabRoot;