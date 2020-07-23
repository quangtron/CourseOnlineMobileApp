import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ListLessonItem from '../ListLessonItem/listLessonItem';
import HeaderLesson from './HeaderLesson/headerLesson';
import Separator from '../../Common/Separator';

const renderListLessons = (data) => {
    return data.map((item, index) => <ListLessonItem data={item} key={index} />)
}

const renderSectionHeader = (data, index) => {
    return(
        <View key={index} style={{marginBottom: 30}}>
            { index !== 0 ? <Separator /> : <View />}
            <HeaderLesson data={data} index={index} />
            {renderListLessons(data.lesson)}
        </View>
    );
}

const renderCourses = (data) => {
    return data.map((item, index) => {
        return renderSectionHeader(item, index);
    })
}

function TranscriptScreen() {
    return (
        <View style={styles.transcriptScreen}>
            <TextInput
                style={styles.inputSearch}
                autoFocus={true}
                clearButtonMode='always'
                placeholder='Search Transcript'
            />
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

const ListLesson = props => {
    const { data } = props;
    
    // console.log('data: ', data)

    const ContentsScreen = () => {
        return (
            <View style={styles.contentsBox}>
                <ScrollView>
                    {renderCourses(data.section)}
                </ScrollView>
            </View>
        );
    }
    
    return(
        <Tab.Navigator>
            <Tab.Screen name="Nội dung" component={ContentsScreen} />
            <Tab.Screen name="Transcript" component={TranscriptScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    contentsBox: {
        margin: 20,
        height: 900,
    },
    inputSearch: {
        marginTop: 10,
        width: '90%',
        height: 35,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    transcriptScreen: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default ListLesson;