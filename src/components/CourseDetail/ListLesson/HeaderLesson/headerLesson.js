import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Styles from '../../../Common/Styles';

const HeaderLesson = props => {
    const { id, name, duration} = props.title;

    return(
        <View style={styles.headerSection}>
            <View style={styles.box}>
                <Text style={Styles.text(18, '#000', 'bold')}>{id}</Text>
            </View>
            <View style={styles.textBox}>
                <Text style={Styles.text(18, '#000', 'normal')}>{name}</Text>
                <Text style={Styles.text(15, '#9E9E9E', 'normal')}>{duration}</Text>
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
})

export default HeaderLesson;