import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import SectionPathsItem from '../SectionPathsItem/sectionPathsItem';

import Styles from '../../../Common/Styles';
import { ScreenKey } from '../../../../global/constants';

const SectionPaths = props => {
    const paths = [
        {
            id: 1,
            title: 'Cisco SCOR (350 - 701) for CCNP Security',
            img: require('../../../../../assets/bgLogin.jpg'),
            courses: 5
        },
        {
            id: 2,
            title: 'React Native 2',
            img: require('../../../../../assets/bgLogin.jpg'),
            courses: 6
        },
        {
            id: 3,
            title: 'React Native 3',
            img: require('../../../../../assets/bgLogin.jpg'),
            courses: 7
        },
    ];

    const showListPathsItem = paths => {
        let result = null;

        result = paths.map((item, index) => <SectionPathsItem key={index} item={item} items={props.items} navigation={props.navigation} />);

        return result;
    }

    const onPressAll = item => {
        props.navigation.navigate(ScreenKey.ListCourses, {item: item})
    }

    return(
        <View style={{margin: 15, marginRight: 0}}>
            <View style={[styles.headerSection, styles.textLayout]}>
                <Text style={Styles.text(16, '#000', 'bold')}>{props.title}</Text>
                <TouchableOpacity style={Styles.btnLayout(70, 20, '#EEEEEE')} onPress={_ => onPressAll(props.items)}>
                    <Text style={{fontSize: 13}}>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.shadowBox} horizontal={true} showsHorizontalScrollIndicator={false}>
                {showListPathsItem(paths)}
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
    textLayout: {
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight: 20,
    },
});

export default SectionPaths;