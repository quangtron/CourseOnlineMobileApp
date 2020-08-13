import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import SectionCoursesItem from '../SectionCoursesItem/sectionCoursesItem';

import Styles from '../../../Common/Styles';
import { ScreenKey } from '../../../../global/constants';
import { SettingCommonContext } from '../../../../provider/settingCommon-provider';

const SectionCourses = props => {
    const {language, theme} = useContext(SettingCommonContext);

    const showListCoursesItem = items => {
        let result = null;
        
        result = items.map((item, index) => <SectionCoursesItem key={index} navigation={props.navigation} item={item} />);
        
        return result;
    }
    
    const onPress = items => {
        props.navigation.navigate(ScreenKey.ListCourses, {items: items, title: props.title});
    }

    return(
        <View style={styles.sectonCourses}>
            <View style={styles.headerSection}>
                <Text style={Styles.text(16, theme ? '#fff' : '#000', 'bold')}>{props.title ? props.title : 'title'}</Text>
                <TouchableOpacity
                    style={Styles.btnLayout(90, 20, '#E0E0E0')}
                    onPress={() => onPress(props.dataSection)}
                >
                    <Text style={{fontSize: 13}}>{language ? "See all" : "Xem tất cả"}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.shadowBox(theme)} horizontal={true} showsHorizontalScrollIndicator={false}>
                {showListCoursesItem(props.dataSection)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    sectonCourses: {
        marginTop: 30,
    },
    shadowBox: (bool) => {
        return {
            shadowColor: bool ? '#fff' : '#000',
            shadowOffset: {
                width: 4,
                height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.5,
        }
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