import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';

const TabRoot = () => {
  return (
    <Tabs
      initialRouteName="index" // Set 'index' as the default tab
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Courses",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="settings" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Leaderboard",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="leaderboard" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabRoot;
