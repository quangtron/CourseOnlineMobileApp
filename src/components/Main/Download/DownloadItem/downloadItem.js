import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Styles from '../../../Common/Styles';
import { ScreenKey } from '../../../../global/constants';

const DownloadItem = props => {
    const { title, author, level, released, duration, img, courses } = props.item;

    const onPress = (item) => {
        if(author){
            props.navigation.navigate(ScreenKey.CourseDetail, {item: item});
        } else {
            props.navigation.navigate(ScreenKey.ListCourses, {item: item});
        }
    }

    return(
        <TouchableOpacity style={styles.item} onPress={() => onPress(props.item)}>
            <Image
                source={img}
                style={styles.image}
            />
            <View style={styles.text}>
                <Text style={Styles.text(16, '#000', 'normal')}>{title}</Text>
                {author ? 
                    <View>
                        <Text style={[Styles.text(14, '#9E9E9E', 'normal'), {marginTop: 10}]}>{author}</Text>
                        <Text style={Styles.text(14, '#9E9E9E', 'normal')}>{`${level} . ${released} . ${duration}`}</Text>
                    </View>
                    : <Text style={[Styles.text(13, '#9E9E9E', 'normal'), {marginTop: 15}]}>{`${courses} courses`}</Text>
                }
            </View>
            {author ? 
                <TouchableOpacity>
                    <Ionicons name="ios-more" size={20} color="black" />
                </TouchableOpacity>
                : null
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 15,
        flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 60,
    },
    text: {
        marginLeft: 10,
        width: '68%',
    }
})

export default DownloadItem;