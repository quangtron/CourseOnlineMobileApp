import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../components/Main/Home/home';
import ListCourses from '../../components/Courses/ListCourses/listCourses';
import CoursesDetail from '../../components/CourseDetail/coursesDetail';
import { ScreenKey } from '../constants';
import Setting from '../../components/AccountManagement/Setting/setting';
import ButtonSetting from '../../components/Common/ButtonSetting';

const HomeStack = createStackNavigator();

function HomeScreen(props) {
    return(
        <HomeStack.Navigator initialRouteName={ScreenKey.Home} mode="modal">
            <HomeStack.Screen
                name={ScreenKey.Home} 
                component={Home} 
                options={{
                    headerRight: () => <ButtonSetting navigation={props.navigation} />
                }}
            />
            <HomeStack.Screen 
                name={ScreenKey.ListCourses} 
                component={ListCourses} 
                options={{title: 'List Courses'}} 
            />
            <HomeStack.Screen
                name={ScreenKey.CourseDetail} 
                component={CoursesDetail} 
                options={{
                    title: 'Courses Detail',
                    headerShown: false,
                }}
            />
            <HomeStack.Screen
                name={ScreenKey.Setting} 
                component={Setting} 
                options={{title: 'Setting', headerShown: false}} 
            />
        </HomeStack.Navigator>
    );
}

export default HomeScreen;