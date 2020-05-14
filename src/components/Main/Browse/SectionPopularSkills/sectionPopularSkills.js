import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Styles from '../../../Common/Styles';

const SectionPopularSkills = props => {
    const items = [
        {
            id: 1,
            name: 'Angular',
            img: null
        },
        {
            id: 2,
            name: 'JavaScript',
            img: require('../../../../../assets/iconCheck.png')
        },
        {
            id: 3,
            name: 'C#',
            img: require('../../../../../assets/iconCheck.png')
        },
        {
            id: 4,
            name: 'Java',
            img: null
        },
        {
            id: 5,
            name: 'Python',
            img: null
        },
        {
            id: 6,
            name: 'Swift',
            img: null
        },
        {
            id: 7,
            name: 'C++',
            img: null
        },
        {
            id: 8,
            name: 'Data Analysts',
            img: null
        },
    ];

    const showListItems = items => {
        let result = null;

        result = items.map((item, index) => {
            return(
                <TouchableOpacity key={index} style={[Styles.btnLayout(null,30,'#E0E0E0'), styles.btnLayout]}>
                    {item.img ? <Image style={{marginLeft: 10}} source={item.img} /> : null}
                    <Text style={{paddingRight: 20, paddingLeft: 10}}>{item.name}</Text>
                </TouchableOpacity>
            );
        });

        return result;
    }

    return(
        <View style={{margin: 15, marginRight: 0}}>
            <Text style={[Styles.text(16, '#000', 'bold'), {marginBottom: 15}]}>{props.title}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {showListItems(items)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    btnLayout: {
        marginRight: 10,
        flexDirection: 'row',
    },
})

export default SectionPopularSkills;