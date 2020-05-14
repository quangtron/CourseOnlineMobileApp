import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ListLessonItem = props => {
    const [check, setCheck] = useState(false);

    const onCheck = _ => {
        setCheck(true);
    }

    return(
        <TouchableOpacity onPress={_ => onCheck()}>
            <View style={styles.lessonBox}>
                {check ? 
                    <Image source={require('../../../../assets/iconCheck.png')} style={styles.image} />
                    : <View style={styles.checkBox} />
                }
                <Text>{props.data.name}</Text>
            </View>
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
})

export default ListLessonItem;