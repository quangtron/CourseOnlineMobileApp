import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Styles from '../../../Common/Styles';

const HeaderLesson = props => {
    const { name, sumHours, lesson} = props.data;

    return(
        <View style={styles.headerSection}>
            <View style={styles.box}>
                <Text style={Styles.text(18, '#000', 'bold')}>{props.index + 1}</Text>
            </View>
            <View style={styles.textBox}>
                <Text style={Styles.text(16, '#000', 'normal')}>{name}</Text>
                <View style={styles.rowBtw}>
                    <Text style={Styles.text(15, '#9E9E9E', 'normal')}>{lesson.length} bài</Text>
                    <Text style={Styles.text(15, '#9E9E9E', 'normal')}>{sumHours.toFixed(2)}h</Text>
                </View>
            </View>
            <TouchableOpacity>
                    <Text style={{fontWeight: 'bold'}}>...</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerSection: {
        flexDirection: 'row',
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 60,
        backgroundColor: '#E0E0E0',
    },
    textBox: {
        marginLeft: 15,
        width: '68%',
        justifyContent: 'space-around'
    },
    rowBtw: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default HeaderLesson;