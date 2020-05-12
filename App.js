import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';
import Home from './src/components/Main/Home/home';
import Browse from './src/components/Main/Browse/browse';
import Dowload from './src/components/Main/Download/download';

export default function App() {
  return (
    <View style={styles.container}>
      <Dowload title='Downloads' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
