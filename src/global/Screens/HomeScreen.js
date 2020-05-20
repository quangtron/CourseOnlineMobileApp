import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../components/Main/Home/home';
import ListCourses from '../../components/Courses/ListCourses/listCourses';
import ScreenKey from '../../components/Common/ScreenKey';
import CoursesDetail from '../../components/CourseDetail/coursesDetail';

const HomeStack = createStackNavigator();

function HomeScreen() {
  return(
    <HomeStack.Navigator initialRouteName={ScreenKey.Home}>
      <HomeStack.Screen name={ScreenKey.Home} component={Home} />
      <HomeStack.Screen name={ScreenKey.ListCourses} component={ListCourses} options={{title: 'List Courses'}} />
      <HomeStack.Screen name={ScreenKey.CourseDetail} component={CoursesDetail} options={{title: 'Courses Detail'}} />
    </HomeStack.Navigator>
  );
}

export default HomeScreen;