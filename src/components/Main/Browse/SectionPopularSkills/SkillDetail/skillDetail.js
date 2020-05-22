import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SectionAuthors from '../../SectionAuthors/sectionAuthors';
import SectionCourses from '../../../Home/SectionCourses/sectionCourses';

function SkillDetail(props) {
    const dataSections = [
        {
            title: 'Paths',
            data: [
                {
                    id: 1,
                    title: 'Cisco SCOR (350 - 701) for CCNP Security',
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    courses: 5
                },
                {
                    id: 2,
                    title: 'React Native 2',
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    courses: 6
                },
                {
                    id: 3,
                    title: 'React Native 3',
                    img: require('../../../../../../assets/bgLogin.jpg'),
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
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    author: 'T1',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
                {
                    id: 2,
                    title: 'React Native 2',
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    author: 'T2',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
                {
                    id: 3,
                    title: 'React Native 3',
                    img: require('../../../../../../assets/bgLogin.jpg'),
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
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    author: 'T1',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
                {
                    id: 2,
                    title: 'React Native 2',
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    author: 'T2',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
                {
                    id: 3,
                    title: 'React Native 3',
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    author: 'T3',
                    level: 'Beginner',
                    released: 'May 11, 2020',
                    duration: '38h'
                },
            ],
        },
        {
            title: 'Top authors',
            data: [
                {
                    id: 1,
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    name: 'Trong 1',
                },
                {
                    id: 2,
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    name: 'Trong 2',
                },
                {
                    id: 3,
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    name: 'Trong 3',
                },
                {
                    id: 4,
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    name: 'Trong 4',
                },
                {
                    id: 5,
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    name: 'Trong 5',
                },
                {
                    id: 6,
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    name: 'Trong 6',
                },
                {
                    id: 7,
                    img: require('../../../../../../assets/bgLogin.jpg'),
                    name: 'Trong 7',
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
                <SectionAuthors dataSection={dataSections[3]} navigation={props.navigation} title='Top Authors' />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        marginLeft: 15,
    },
})

export default SkillDetail;