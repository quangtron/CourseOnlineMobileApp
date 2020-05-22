import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Styles from '../../../Common/Styles';
import { ScreenKey } from '../../../../global/constants';

const SectionPathsItem = props => {
    const { title, courses, img } = props.item;

    const onPressPath = item => {
        props.navigation.navigate(ScreenKey.ListCourses, {item: item})
    }

    return(
        <TouchableOpacity style={styles.item} onPress={_ => onPressPath(props.items)}>
            <View style={styles.bgView}>
                <Image
                    source={img}
                    style={styles.image}
                />
            </View>
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
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    bgView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        backgroundColor: '#fff',
    }
})

export default SectionPathsItem;