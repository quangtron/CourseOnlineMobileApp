import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Styles from '../../../Common/Styles';

const SectionCoursesItem = props => {
    const { title, author, level, released, duration, img, courses } = props.item;

    return(
        <TouchableOpacity style={styles.item}>
            <Image
                source={img}
                style={styles.image}
            />
            <View style={{margin: 10}}>
                <Text>{title}</Text>
                {author ? 
                    <View>
                        <Text style={[Styles.text(13, '#9E9E9E', 'normal'), {marginTop: 10}]}>{author}</Text>
                        <Text style={Styles.text(13, '#9E9E9E', 'normal')}>{`${level} . ${released} . ${duration}`}</Text>
                    </View>
                    : <Text style={[Styles.text(13, '#9E9E9E', 'normal'), {marginTop: 15}]}>{`${courses} courses`}</Text>
                }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        width: 200,
        height: 200,
        backgroundColor: '#EEEEEE',
    },
    image: {
        width: 200,
        height: 100,
    },
})

export default SectionCoursesItem;