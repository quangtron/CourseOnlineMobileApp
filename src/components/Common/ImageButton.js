import React from 'react';
import { ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Styles from '../Common/Styles'
import { ScreenKey } from '../../global/constants';

const ImageButton = props => {
    const onPressImg = items => {
        if(props.width){
            props.navigation.navigate(ScreenKey.SkillDetail);
        } else {
            if(props.title === 'NEW RELEASES'){
                filterCourses(items, 1);
            } else if (props.title === 'RECOMMENDED FOR YOU'){
                filterCourses(items, 2);
            }else {
                props.navigation.navigate(ScreenKey.ListCourses, {item: items});
            }
        }
    }

    const filterCourses = (items, status) => {
        let temp = items.data;
        temp = temp.filter((item) => {
            return item.status === status;
        })
        props.navigation.navigate(ScreenKey.ListCourses, {item: {...items, data: temp}});
    }

    return(
        <ImageBackground
            style={[styles.image,
                {width: props.width || '100%', height: props.height || 100}
            ]}
            source={props.img}
        >
            <TouchableOpacity style={styles.content} onPress={_ => onPressImg(props.items)}>
                <Text style={[Styles.text(20, '#fff', 'bold'), {textTransform: 'uppercase'}]}>{props.title}</Text>
                {props.extraTitle ? <Text style={[Styles.text(11, '#fff', 'normal'), {textTransform: 'uppercase'}]}>{props.extraTitle}</Text> : null}
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        marginRight: 15,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ImageButton;