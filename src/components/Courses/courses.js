import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SectionCourses from '../Main/Home/SectionCourses/sectionCourses';
import SectionAuthors from '../Main/Browse/SectionAuthors/sectionAuthors';

const Courses = _ => {
    const dataSections = [
        {
            title: 'Paths',
            data: [
                {
                    id: 1,
                    title: 'Cisco SCOR (350 - 701) for CCNP Security',
                    img: require('../../../assets/bgLogin.jpg'),
                    courses: 5
                },
                {
                    id: 2,
                    title: 'React Native 2',
                    img: require('../../../assets/bgLogin.jpg'),
                    courses: 6
                },
                {
                    id: 3,
                    title: 'React Native 3',
                    img: require('../../../assets/bgLogin.jpg'),
                    courses: 7
                },
            ],
        },
        {
            title: 'New',
            data: [
                {
                    id: 1,
                    title: 'React Native 1',
                    img: require('../../../assets/bgLogin.jpg'),
                    author: 'T1',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
                {
                    id: 2,
                    title: 'React Native 2',
                    img: require('../../../assets/bgLogin.jpg'),
                    author: 'T2',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
                {
                    id: 3,
                    title: 'React Native 3',
                    img: require('../../../assets/bgLogin.jpg'),
                    author: 'T3',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
            ],
        },
        {
            title: 'Trending',
            data: [
                {
                    id: 1,
                    title: 'React Native 1',
                    img: require('../../../assets/bgLogin.jpg'),
                    author: 'T1',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
                {
                    id: 2,
                    title: 'React Native 2',
                    img: require('../../../assets/bgLogin.jpg'),
                    author: 'T2',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
                {
                    id: 3,
                    title: 'React Native 3',
                    img: require('../../../assets/bgLogin.jpg'),
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
                <SectionCourses dataSection={dataSections[0]} />
                <SectionCourses dataSection={dataSections[1]} />
                <SectionCourses dataSection={dataSections[2]} />
                <View style={{marginTop: 10}}>
                    <SectionAuthors title='Top Authors' />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        marginTop: 40,
        marginLeft: 15,
    }
})

export default Courses;