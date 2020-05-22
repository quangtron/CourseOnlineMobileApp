import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../../components/Main/Search/search';
import { ScreenKey } from '../constants';
import CoursesDetail from '../../components/CourseDetail/coursesDetail';
import ListCourses from '../../components/Courses/ListCourses/listCourses';

const SearchStack = createStackNavigator();

function SearchScreen() {
    return(
        <SearchStack.Navigator mode="modal">
            <SearchStack.Screen
                name={ScreenKey.Search}
                component={Search}
                options={{headerShown: false}}
            />
            <SearchStack.Screen
                name={ScreenKey.CourseDetail} 
                component={CoursesDetail} 
                options={{
                    title: 'Courses Detail',
                    headerShown: false,
                }}
            />
            <SearchStack.Screen 
                name={ScreenKey.ListCourses} 
                component={ListCourses} 
                options={{title: 'List Courses'}} 
            />
        </SearchStack.Navigator>
    );
}

export default SearchScreen;