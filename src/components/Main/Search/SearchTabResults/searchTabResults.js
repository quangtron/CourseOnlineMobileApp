import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SearchAll from '../SearchAll/searchAll';
import SearchCourses from '../SearchCourses/searchCourses';


const SearchTabResults = props => {
    const SearchAllScreen = () => {
        return(
            <SearchAll all={props.results} />
        );
    }

    const SearchCoursesScreen = () => {
        return(
            <SearchCourses courses={props.results[0]} />
        );
    }

    const Tab = createMaterialTopTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen name="All" component={SearchAllScreen} />
            <Tab.Screen name="Courses" component={SearchCoursesScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    searchView: {
        margin: 20,
    },
    inputSearch: {
        marginTop: 10,
        width: '90%',
        height: 35,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    transcriptScreen: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default SearchTabResults;