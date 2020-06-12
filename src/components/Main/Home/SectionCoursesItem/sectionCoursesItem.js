import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Styles from '../../../Common/Styles';
import { ScreenKey } from '../../../../global/constants';

const SectionCoursesItem = props => {
    const { title, author, level, released, duration, img, courses } = props.item;

    const onPressItem = item => {
        if(author){
            props.navigation.navigate(ScreenKey.CourseDetail, {item});
        } else {
            props.navigation.navigate(ScreenKey.ListCourses, {item: {title: 'Paths', data: courses}});
        }
    }

    return(
        <TouchableOpacity style={styles.item} onPress={() => onPressItem(props.item)}>
            <Image
                source={img}
                style={styles.image}
            />
            <View style={styles.course}>
                <Text>{title}</Text>
                {author ? 
                    <View>
                        <Text style={[Styles.text(13, '#9E9E9E', 'normal'), {marginTop: 10}]}>{author}</Text>
                        <Text style={Styles.text(13, '#9E9E9E', 'normal')}>{`${level} . ${released} . ${duration}`}</Text>
                    </View>
                    : <Text style={[Styles.text(13, '#9E9E9E', 'normal'), {marginTop: 15}]}>{`${courses.length} courses`}</Text>
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
    course: {
        margin: 10,
    }
})

export default SectionCoursesItem;