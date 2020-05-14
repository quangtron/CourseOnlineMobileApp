import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Styles from '../../../Common/Styles';

const HeaderInformation = _ => {
    return(
        <View>
            <Text style={Styles.text(22, '#000', 'bold')}>Leadership for Non-managers</Text>
            <TouchableOpacity style={[Styles.btnLayout(150,30,'#EEEEEE'), styles.author]}>
                <Image
                    style={styles.image}
                    source={require('../../../../../assets/user.png')}
                />
                <Image
                    style={styles.imageCheck}
                    source={require('../../../../../assets/iconCheck.png')}
                />
                <Text style={styles.text}>Jason Alba</Text>
            </TouchableOpacity>
            <Text style={[Styles.text(14, '#9E9E9E', 'normal'), {marginTop: 15}]}>Beginner . Apr 20, 2020 . 4h 2m </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    author: {
        marginRight: 10,
        marginTop: 20,
        flexDirection: 'row',
    },
    image: {
        width: 40,
        height: 40,
        left: -10,
    },
    imageCheck: {
        width: 15,
        height: 15,
        left: -23,
    },
    text: {
        paddingRight: 15,
        left: -5,
    },
})

export default HeaderInformation;