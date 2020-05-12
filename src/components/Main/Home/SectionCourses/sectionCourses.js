import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import SectionCoursesItem from '../SectionCoursesItem/sectionCoursesItem';

import Styles from '../../../Common/Styles';

const SectionCourses = props => {
    const showListCoursesItem = items => {
        let result = null;

        result = items.map((item, index) => <SectionCoursesItem key={index} item={item} />);

        return result;
    }

    return(
        <View style={{marginTop: 30}}>
            <View style={[styles.headerSection, {paddingLeft: 5, paddingBottom: 5, paddingRight: 20}]}>
                <Text style={Styles.text(16, '#000', 'bold')}>{props.dataSection.title}</Text>
                <TouchableOpacity style={Styles.btnLayout(70, 20, '#EEEEEE')}>
                    <Text style={{fontSize: 13}}>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.shadowBox} horizontal={true} showsHorizontalScrollIndicator={false}>
                {showListCoursesItem(props.dataSection.data)}
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