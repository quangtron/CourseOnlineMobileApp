import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const OthersButtonItem = props => {
    return(
        <TouchableOpacity style={styles.btnLayout}>
            <Image style={styles.image} source={props.data.img} />
            <Text style={{fontWeight: 'bold'}}>{props.data.name}</Text>
        </TouchableOpacity>
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

export default OthersButtonItem;