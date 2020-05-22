import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import SectionCoursesItem from '../SectionCoursesItem/sectionCoursesItem';

import Styles from '../../../Common/Styles';
import { ScreenKey } from '../../../../global/constants';

const SectionCourses = props => {
    const showListCoursesItem = items => {
        let result = null;
        
        result = items.map((item, index) => <SectionCoursesItem key={index} navigation={props.navigation} item={item} />);
        
        return result;
    }
    
    const onPress = item => {
        props.navigation.navigate(ScreenKey.ListCourses, {item: item});
    }
    
    const { title, data } = props.dataSection;

    return(
        <View style={styles.sectonCourses}>
            <View style={styles.headerSection}>
                <Text style={Styles.text(16, '#000', 'bold')}>{title}</Text>
                <TouchableOpacity
                    style={Styles.btnLayout(70, 20, '#EEEEEE')}
                    onPress={_ => onPress(props.dataSection)}
                >
                    <Text style={{fontSize: 13}}>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.shadowBox} horizontal={true} showsHorizontalScrollIndicator={false}>
                {showListCoursesItem(data)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    sectonCourses: {
        marginTop: 30,
    },
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
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight: 20,
    },
});

export default SectionCourses;