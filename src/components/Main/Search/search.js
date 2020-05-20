import React from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Styles from '../../Common/Styles';
import SearchAll from './SearchAll/searchAll';
import SearchCourses from './SearchCourses/searchCourses';
import SearchInput from './SearchInput/searchInput';
import SearchTabResults from './SearchTabResults/searchTabResults';

const Search = _ => {
    const results = [
        {
            title: 'Courses',
            data: [
                {
                    id: 1,
                    title: 'React Native 1',
                    img: require('../../../../assets/bgLogin.jpg'),
                    author: 'T1',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
                {
                    id: 2,
                    title: 'React Native 2',
                    img: require('../../../../assets/bgLogin.jpg'),
                    author: 'T2',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
                {
                    id: 3,
                    title: 'React Native 3',
                    img: require('../../../../assets/bgLogin.jpg'),
                    author: 'T3',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
            ],
        },
        {
            title: 'Paths',
            data: [
                {
                    id: 1,
                    title: 'React',
                    img: require('../../../../assets/bgLogin.jpg'),
                    courses: 5,
                },
                {
                    id: 2,
                    title: 'React Native 2',
                    img: require('../../../../assets/bgLogin.jpg'),
                    courses: 6,
                },
            ],
        },
        {
            title: 'Authors',
            data: [
                {
                    id: 1,
                    img: require('../../../../assets/bgLogin.jpg'),
                    author: 'T1',
                    courses: 5,
                },
                {
                    id: 2,
                    img: require('../../../../assets/bgLogin.jpg'),
                    author: 'T2',
                    courses: 6,
                },
                {
                    id: 3,
                    img: require('../../../../assets/bgLogin.jpg'),
                    author: 'T3',
                    courses: 7,
                },
            ],
        },
    ];

    return(
        <ScrollView style={styles.searchView}>
            <SearchInput />
            <SearchTabResults results={results} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    searchView: {
        margin: 20,
    },
})

export default Search;