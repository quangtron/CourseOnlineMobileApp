import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const SectionAuthorsItem = props => {
    return(
        <TouchableOpacity style={{marginRight: 10}}>
            <Image source={props.item.img} style={styles.image} />
            <Text style={styles.textLayout}>{props.item.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    textLayout: {
        marginTop: 10,
        textAlign: 'center',
    },
})

export default SectionAuthorsItem;