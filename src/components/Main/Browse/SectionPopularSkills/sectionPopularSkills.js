import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Styles from '../../../Common/Styles';
import { ScreenKey } from '../../../../global/constants';
import { PopularSkillsContext } from '../../../../provider/popular-skills-provider';

const SectionPopularSkills = props => {
    const {popularSkills} = useContext(PopularSkillsContext);

    const onPressSkill = _ => {
        props.navigation.navigate(ScreenKey.SkillDetail);
    }

    const showListItems = items => {
        let result = null;

        result = items.map((item, index) => {
            return(
                <TouchableOpacity
                    key={index}
                    style={[Styles.btnLayout(null,30,'#E0E0E0'), styles.btnLayout]}
                    onPress={onPressSkill}
                >
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
                {showListItems(popularSkills)}
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