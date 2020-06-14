import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Styles from '../../../Common/Styles';

const HeaderInformation = props => {
    const { title, img, author, duration, released, level } = props.infor;

    return(
        <View>
            <Text style={Styles.text(22, '#000', 'bold')}>{title}</Text>
            <TouchableOpacity style={[Styles.btnLayout(120,30,'#EEEEEE'), styles.author]}>
                <View style={styles.images}>
                    <Image
                        style={styles.image}
                        source={img}
                    />
                    <Image
                        style={styles.imageCheck}
                        source={require('../../../../../assets/iconCheck.png')}
                    />
                </View>
                <Text style={styles.text}>{author}</Text>
            </TouchableOpacity>
            <Text style={[Styles.text(14, '#9E9E9E', 'normal'), {marginTop: 15}]}>{`${level} . ${released} . ${duration}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    author: {
        marginRight: 10,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 40,
        height: 40,
        // left: -10,
        borderRadius: 50,
    },
    images: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageCheck: {
        width: 15,
        height: 15,
        left: -10,
    },
    text: {
        paddingRight: 15,
        left: -10,
    },
})

export default HeaderInformation;