import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

import Styles from '../../../Common/Styles';
import { ScreenKey } from '../../../../global/constants';
import { CoursesContext } from '../../../../provider/courses-provider';
import { SettingCommonContext } from '../../../../provider/settingCommon-provider';

const SectionPopularSkills = props => {
    const courseContext = useContext(CoursesContext);
    const {theme} = useContext(SettingCommonContext);
    const [title, setTitle] = useState('Danh sách khoá học');
    const [isShow, setShow] = useState(false);

    useEffect(() => {
        if(courseContext.state.coursesCategory){
            props.navigation.navigate(ScreenKey.ListCourses, {items: courseContext.state.coursesCategory , title: title });
        }
    }, [courseContext.state.coursesCategory])

    const onPressSkill = (item) => {
        courseContext.coursesCategory("", {category: [item.id]}, 0, 11);
        setTitle(item.name);
        // setShow(!isShow);
    }

    const showListItems = items => {
        let result = null;

        result = items.map((item, index) => {
            return(
                <ImageBackground source={props.img} style={styles.imgBg}>
                    <TouchableOpacity
                        key={index}
                        style={styles.btnLayout}
                        onPress={() => onPressSkill(item)}
                    >
                        <Text style={styles.textStyle}>{item.name}</Text>
                    </TouchableOpacity>
                </ImageBackground>
            );
        });

        return result;
    }

    return(
        <View style={{margin: 15, marginRight: 0}}>
            <Text style={[Styles.text(16, theme ? '#fff' : '#000', 'bold'), {marginBottom: 15}]}>{props.title}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.flewrap}>
                    {showListItems(props.items)}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    btnLayout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        paddingRight: 15,
        paddingLeft: 15,
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold'
    },
    imgBg: {
        width: 200,
        height: 100,
        marginRight: 20,
        marginBottom: 20
    },
    flewrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '50%'
    }
})

export default SectionPopularSkills;