import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>if you are alredy login.</Text>
      <Link href={"/(SignUp)"} style={styles.cardSignUp}>SignUp</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '"#272C35"',
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signUpText:{
    padding:20,
  },
  cardSignUp:{
    color:"blue",
  },
});