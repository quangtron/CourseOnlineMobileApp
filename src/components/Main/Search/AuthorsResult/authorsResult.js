import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

import Styles from '../../../Common/Styles'
import { ScreenKey } from '../../../../global/constants';

const AuthorsResult = props => {
    const { img, author, courses } = props.item;

    const onPressAuthor = item => {
        props.navigation.navigate(ScreenKey.ListCourses, {item: item})
    }

    return(
        <TouchableOpacity style={styles.item} onPress={_ => onPressAuthor(props.item)}>
            <Image style={styles.image} source={img} />
            <View style={styles.text}>
                <Text style={{marginBottom: 5}}>{author}</Text>
                <Text style={Styles.text(14, '#9E9E9E', 'normal')}>{`${courses} courses`}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    text: {
        marginLeft: 10,
        width: '68%',
    }
})

export default AuthorsResult;