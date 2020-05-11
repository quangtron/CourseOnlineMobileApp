import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import { Styles } from '../../../Common';

const SectionCoursesItem = props => {
    const { title, author, level, released, duration } = props.item;

    return(
        <View style={styles.item}>
            <Image
                source={require('../../../../../assets/bgLogin.jpg')}
                style={styles.image}
            />
            <View style={{margin: 10}}>
                <Text>{title}</Text>
                <Text style={Styles.text(13, '#9E9E9E', 'normal')}>{author}</Text>
                <Text style={Styles.text(13, '#9E9E9E', 'normal')}>{`${level} . ${released} . ${duration}`}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        width: 200,
        height: 200,
        backgroundColor: '#EEEEEE',
    },
    image: {
        width: 200,
        height: 100,
    },
})

export default SectionCoursesItem;