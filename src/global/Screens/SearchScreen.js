import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../../components/Main/Search/search';
import { ScreenKey } from '../constants';
import CoursesDetail from '../../components/CourseDetail/coursesDetail';
import ListCourses from '../../components/Courses/ListCourses/listCourses';
import { SettingCommonContext } from '../../provider/settingCommon-provider';

const SearchStack = createStackNavigator();

function SearchScreen() {
    const {language, setLanguage} = useContext(SettingCommonContext);

    return(
        <SearchStack.Navigator mode="modal" initialRouteName={language ? ScreenKey.Search : 'Tìm kiếm'}>
            <SearchStack.Screen
                name={language ? ScreenKey.Search : 'Tìm kiếm'}
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