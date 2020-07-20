import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Styles from '../../Common/Styles';

const ListLessonItem = props => {
    const [check, setCheck] = useState(false);

    const onCheck = _ => {
        setCheck(true);
    }

    return(
        <TouchableOpacity onPress={_ => onCheck()} style={styles.section}>
            <View style={styles.lessonBox}>
                {check ? 
                    <Image source={require('../../../../assets/iconCheck.png')} style={styles.image} />
                    : <View style={styles.checkBox} />
                }
                <Text>{props.data.name}</Text>
            </View>
            <Text style={Styles.text(15, '#9E9E9E', 'normal')}>{props.data.hours.toFixed(2)}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    lessonBox: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginRight: 20,
        width: 10,
        height: 10,
    },
    checkBox: {
        marginRight: 20,
        width: 10,
        height: 10,
        backgroundColor: 'gray',
        borderRadius: 50,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default ListLessonItem;