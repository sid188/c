
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }
    Alert.alert('Success', `Signed up with username: ${username}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});