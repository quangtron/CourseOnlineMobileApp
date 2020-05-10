import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';

export default function App() {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
