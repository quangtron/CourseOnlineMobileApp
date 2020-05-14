import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import VideoPlayer from './VideoPlayer/videoPlayer';
import Information from './Information/information';
import ListLesson from './ListLesson/listLesson';

const CoursesDetail = _ => {
    return(
        <View>
            <VideoPlayer />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Information />
                <ListLesson />
            </ScrollView>
        </View>
    );
}

export default CoursesDetail;