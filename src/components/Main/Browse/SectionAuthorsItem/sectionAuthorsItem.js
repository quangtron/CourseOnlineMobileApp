import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { ScreenKey } from '../../../../global/constants';

const SectionAuthorsItem = props => {
    const onPressAuthor = item => {
        props.navigation.navigate(ScreenKey.ListCourses, {item: item});
    }

    return(
        <TouchableOpacity style={styles.author} onPress={_ => onPressAuthor(props.items)} >
            <Image source={props.item.img} style={styles.image} />
            <Text style={styles.textLayout}>{props.item.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    author: {
        marginRight: 20
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    textLayout: {
        marginTop: 10,
        textAlign: 'center',
        width: 80,
    },
})

export default SectionAuthorsItem;