import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';
import Home from './src/components/Main/Home/home';
import Browse from './src/components/Main/Browse/browse';
import Download from './src/components/Main/Download/download';
import Search from './src/components/Main/Search/search';
import CoursesDetail from './src/components/CourseDetail/coursesDetail';
import Setting from './src/components/AccountManagement/Setting/setting';
import Courses from './src/components/Courses/courses';
import ListCourses from './src/components/Courses/ListCourses/listCourses';
import ForgetPassword from './src/components/Authentication/ForgetPassword/forgetPassword';
import Profile from './src/components/AccountManagement/Profile/profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
