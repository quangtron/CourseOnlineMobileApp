import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import Styles from '../../../Common/Styles';

const SectionPopularSkills = props => {
    const items = [
        'Angular',
        'JavaScript',
        'C#',
        'Java',
        'C++',
        'Python',
        'Swift',
        'Data Analysts',
    ];

    const showListItems = items => {
        let result = null;

        result = items.map((item, index) => {
            return(
                <TouchableOpacity key={index} style={[Styles.btnLayout(null,30,'#E0E0E0'), {marginRight: 10}]}>
                    <Text style={{paddingRight: 20, paddingLeft: 20}}>{item}</Text>
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

export default SectionPopularSkills;