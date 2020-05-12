import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Styles from '../../../Common/Styles';

const SectionPathsItem = props => {
    const { title, courses, img } = props.item;

    return(
        <TouchableOpacity style={styles.item}>
            <Image
                source={img}
                style={styles.image}
            />
            <View style={{margin: 10}}>
                <Text>{title}</Text>
                <Text style={[Styles.text(13, '#9E9E9E', 'normal'), {marginTop: 5}]}>{`${courses} courses`}</Text>
            </View>
        </TouchableOpacity>
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
        height: 115,
    },
})

export default SectionPathsItem;