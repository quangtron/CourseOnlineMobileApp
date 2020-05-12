import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';
import Home from './src/components/Main/Home/home';
import Browse from './src/components/Main/Browse/browse';
import Download from './src/components/Main/Download/download';
import Search from './src/components/Main/Search/search';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Download title='Downloads' /> */}
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
