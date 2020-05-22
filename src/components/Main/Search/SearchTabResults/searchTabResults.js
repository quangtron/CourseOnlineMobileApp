import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SearchAll from '../SearchAll/searchAll';
import SearchByName from '../SearchByName/searchByName';
import { ScreenKey } from '../../../../global/constants';


const SearchTabResults = props => {
    const SearchAllScreen = () => {
        return(
            <SearchAll all={props.results} navigation={props.navigation} />
        );
    }

    const SearchCoursesScreen = () => {
        return(
            <SearchByName courses={props.results[0]} navigation={props.navigation} />
        );
    }

    const SearchPathsScreen = () => {
        return(
            <SearchByName courses={props.results[1]} navigation={props.navigation} />
        );
    }

    const SearchAuthorsScreen = () => {
        return(
            <SearchByName courses={props.results[2]} navigation={props.navigation} />
        );
    }

    const Tab = createMaterialTopTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen name={ScreenKey.All} component={SearchAllScreen} />
            <Tab.Screen name={ScreenKey.Courses} component={SearchCoursesScreen} />
            <Tab.Screen name={ScreenKey.Paths} component={SearchPathsScreen} />
            <Tab.Screen name={ScreenKey.Authors} component={SearchAuthorsScreen} />
        </Tab.Navigator>
    );
}

export default SearchTabResults;