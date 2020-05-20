import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Splashscreen = _ => {
    const [loading, setLoading] = useState(0);
    const srcImage = require('../../../../assets/logo.png');

    // useEffect(_ => {
    //     setLoading(loading + 1);
    //     // if(loading === 100){

    //     // }
    // }, [loading])

    return(
        <View style={styles.splashscreen}>
            <Image source={srcImage} style={styles.image} />
            <Text>{`Loading ... ${loading}%`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    splashscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginBottom: 10,
        width: 150,
        height: 150,
    }
})

export default Splashscreen;