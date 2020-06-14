import React, { useContext } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import VideoPlayer from './VideoPlayer/videoPlayer';
import Information from './Information/information';
import ListLesson from './ListLesson/listLesson';
import { BookmarksContext } from '../../provider/bookmarks-provider';

const CoursesDetail = props => {
    const { item } = props.route.params;
    const {bookmarks} = useContext(BookmarksContext);
    
    const onPressLeft = () => {
        props.navigation.goBack();
    }

    return(
        <View>
            <TouchableOpacity style={styles.back} onPress={onPressLeft}>
                <Ionicons name="ios-arrow-back" size={24} color="tomato" />
            </TouchableOpacity>
            <VideoPlayer />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Information infor={item} />
                <ListLesson />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    back: {
        margin: 20,
        marginTop: 40,
        position: 'absolute',
        zIndex: 1,
    }
})

export default CoursesDetail;