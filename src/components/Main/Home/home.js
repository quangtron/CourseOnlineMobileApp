import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SectionCourses from './SectionCourses/sectionCourses';

function Home(props) {
    const dataSections = [
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
                    title: 'Cisco SCOR (350 - 701) for CCNP Security',
                    img: require('../../../../assets/bgLogin.jpg'),
                    courses: 5
                },
                {
                    id: 2,
                    title: 'React Native 2',
                    img: require('../../../../assets/bgLogin.jpg'),
                    courses: 6
                },
                {
                    id: 3,
                    title: 'React Native 3',
                    img: require('../../../../assets/bgLogin.jpg'),
                    courses: 7
                },
            ],
        },
        {
            title: 'Channels',
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
            title: 'Bookmarks',
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
    ];

    return(
        <View style={styles.home}>
            <ScrollView>
                <SectionCourses dataSection={dataSections[0]} navigation={props.navigation} />
                <SectionCourses dataSection={dataSections[1]} navigation={props.navigation} />
                <SectionCourses dataSection={dataSections[2]} navigation={props.navigation} />
                <SectionCourses dataSection={dataSections[3]} navigation={props.navigation} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        marginLeft: 15,
    },
})

export default Home;