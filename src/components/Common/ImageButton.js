import React from 'react';
import { ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Styles from '../Common/Styles'
import { ScreenKey } from '../../global/constants';

const ImageButton = props => {
    const onPressImg = items => {
        props.navigation.navigate(ScreenKey.ListCourses, {items: items, title: props.title});
    }

    return(
        <ImageBackground
            style={[styles.image,
                {width: props.width || '100%', height: props.height || 100}
            ]}
            source={props.img}
        >
            <TouchableOpacity style={styles.content} onPress={() => onPressImg(props.items)}>
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