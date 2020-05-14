import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const ButtonInformation = props => {
    return(
        <View>
            <TouchableOpacity style={styles.itemCenter}>
                <View style={styles.circleBtn}>
                    <Image source={props.item.img} style={styles.image} />
                </View>
                <Text style={styles.textLayout}>{props.item.name}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemCenter: {
        marginRight: '15%',
        alignItems: 'center'
    },
    image: {
        alignSelf: 'center',
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    textLayout: {
        marginTop: 10,
        textAlign: 'center',
    },
    circleBtn: {
        width: 60,
        height: 60,
        backgroundColor: '#E0E0E0',
        borderRadius: 50,
        justifyContent: 'center',
    },
})

export default ButtonInformation;