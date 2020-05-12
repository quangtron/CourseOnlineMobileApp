import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import SectionCoursesItem from '../SectionCoursesItem/sectionCoursesItem';

import Styles from '../../../Common/Styles';

const SectionCourses = props => {
    const courses = [
        {
            id: 1,
            title: 'React Native 1',
            img: require('../../../../../assets/bgLogin.jpg'),
            author: 'T1',
            level: 'Beginner',
            released: 'May 11, 2020',
            duration: '38h'
        },
        {
            id: 2,
            title: 'React Native 2',
            img: require('../../../../../assets/bgLogin.jpg'),
            author: 'T2',
            level: 'Beginner',
            released: 'May 11, 2020',
            duration: '38h'
        },
        {
            id: 3,
            title: 'React Native 3',
            img: require('../../../../../assets/bgLogin.jpg'),
            author: 'T3',
            level: 'Beginner',
            released: 'May 11, 2020',
            duration: '38h'
        },
    ];

    const showListCoursesItem = courses => {
        let result = null;

        result = courses.map((item, index) => <SectionCoursesItem key={index} item={item} />);

        return result;
    }

    return(
        <View style={{marginTop: 30}}>
            <View style={[styles.headerSection, {paddingLeft: 5, paddingBottom: 5, paddingRight: 20}]}>
                <Text style={Styles.text(16, '#000', 'bold')}>{props.title}</Text>
                <TouchableOpacity style={Styles.btnLayout(70, 20, '#EEEEEE')}>
                    <Text style={{fontSize: 13}}>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.shadowBox} horizontal={true} showsHorizontalScrollIndicator={false}>
                {showListCoursesItem(courses)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    shadowBox: {
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.5,
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default SectionCourses;