import React from 'react';
import { ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Styles from '../Common/Styles'

const ImageButton = props => {
    return(
        <ImageBackground
            style={[styles.image,
                {width: props.width || '100%', height: props.height || 100}
            ]}
            source={props.img}
        >
            <TouchableOpacity style={styles.content}>
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