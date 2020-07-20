import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import OthersButtonItem from '../OthersButtonItem/othersButtonItem';

const OthersButton = _ => {
    const buttons = [
        {
            name: 'Related paths & courses',
            img: require('../../../../../assets/iconPlus.png'),
        },
        {
            name: 'Take a learning check',
            img: require('../../../../../assets/iconPlus.png'),
        },
    ];

    return(
        <View>
            {/* <OthersButtonItem data={buttons[0]} />
            <OthersButtonItem data={buttons[1]} /> */}
            <TouchableOpacity style={styles.btnLayout}>
                <Ionicons name="ios-heart-empty" size={24} color="black" />
                <Text style={{fontWeight: 'bold'}}>Related paths & courses</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btnLayout: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#E0E0E0',
        borderRadius: 5,
        height: 50,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 5,
    }
})

export default OthersButton;