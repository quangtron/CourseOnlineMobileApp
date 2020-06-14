import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SearchAll from '../SearchAll/searchAll';
import SearchByName from '../SearchByName/searchByName';
import { ScreenKey } from '../../../../global/constants';


const SearchTabResults = props => {
    const SearchAllScreen = () => {
        return(
            <SearchAll navigation={props.navigation} />
        );
    }

    const SearchCoursesScreen = () => {
        return(
            <SearchByName name={ScreenKey.Courses} navigation={props.navigation} />
        );
    }

    const SearchPathsScreen = () => {
        return(
            <SearchByName name={ScreenKey.Paths} navigation={props.navigation} />
        );
    }

    const SearchAuthorsScreen = () => {
        return(
            <SearchByName name={ScreenKey.Authors} navigation={props.navigation} />
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