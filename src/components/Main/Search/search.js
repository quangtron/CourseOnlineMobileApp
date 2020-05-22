import React from 'react';
import { ScrollView } from 'react-native';

import SearchInput from './SearchInput/searchInput';
import SearchTabResults from './SearchTabResults/searchTabResults';

const Search = props => {
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
                            id: 1,
                            title: 'React Native 1',
                            img: require('../../../../assets/bgLogin.jpg'),
                            author: 'T1',
                            level: 'Beginner',
                            released: 'May 11, 2020',
                            duration: '38h'
                        },
                        {
                            id: 1,
                            title: 'React Native 1',
                            img: require('../../../../assets/bgLogin.jpg'),
                            author: 'T1',
                            level: 'Beginner',
                            released: 'May 11, 2020',
                            duration: '38h'
                        },
                    ]
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
                    data:[
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
                            id: 1,
                            title: 'React Native 1',
                            img: require('../../../../assets/bgLogin.jpg'),
                            author: 'T1',
                            level: 'Beginner',
                            released: 'May 11, 2020',
                            duration: '38h'
                        },
                    ]
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
        <ScrollView scrollEnabled={false}>
            <SearchInput />
            <SearchTabResults results={results} navigation={props.navigation} />
        </ScrollView>
    );
}

export default Search;