import React, { useContext } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { ScreenKey } from '../../../../global/constants';
import { MainContext } from '../../../../provider/main-provider';

const SectionAuthorsItem = props => {
    const {main} = useContext(MainContext);

    const onPressAuthor = item => {
        props.navigation.navigate(ScreenKey.ListCourses, {item: item});
    }

    const { img, author } = props.item;

    return(
        <TouchableOpacity style={styles.author} onPress={_ => onPressAuthor(main.Courses)} >
            <Image source={img} style={styles.image} />
            <Text style={styles.textLayout}>{author}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    author: {
        marginRight: 20
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    textLayout: {
        marginTop: 10,
        textAlign: 'center',
        width: 80,
    },
})

export default SectionAuthorsItem;