import { Stack } from 'expo-router';
import React from 'react';
import { PaperProvider } from 'react-native-paper';

const RootLayout = () => {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>

  )
}

export default RootLayout