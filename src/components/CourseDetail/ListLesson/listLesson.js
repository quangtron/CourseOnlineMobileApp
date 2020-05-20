import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, SectionList, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ListLessonItem from '../ListLessonItem/listLessonItem';
import Separator from '../../Common/Separator';
import HeaderLesson from './HeaderLesson/headerLesson';

const listLesson = [
    {
        title: {
            id: 1,
            name: 'Course Overview',
            duration: '1:27',
        },
        data: [
            {
                name: 'Introduction 1',
                duration: '1:27',
            },
            {
                name: 'Introduction 2',
                duration: '1:27',
            },
            {
                name: 'Introduction 3',
                duration: '1:27',
            },
        ],
    },
    {
        title: {
            id: 2,
            name: 'Understanding Leadership Fundamentals',
            duration: '1:27',
        },
        data: [
            {
                name: 'Introduction 4',
                duration: '1:27',
            },
            {
                name: 'Introduction 5',
                duration: '1:27',
            },
            {
                name: 'Introduction 6',
                duration: '1:27',
            },
        ],
    },
    {
        title: {
            id: 3,
            name: 'Deploy Product',
            duration: '1:27',
        },
        data: [
            {
                name: 'Introduction 7',
                duration: '1:27',
            },
            {
                name: 'Introduction 8',
                duration: '1:27',
            },
            {
                name: 'Introduction 9',
                duration: '1:27',
            },
        ],
    },
];

const renderSectionHeader = (title) => {
    return(
        <HeaderLesson title={title} />
    );
}

function ContentsScreen() {
    return (
        <View style={styles.contentsBox}>
            <SectionList
                    sections = {listLesson}
                    renderItem = {({item}) => <ListLessonItem data={item} />}
                    renderSectionHeader = {({section: {title}}) => renderSectionHeader(title)}
                    ItemSeparatorComponent = {Separator}
                    showsVerticalScrollIndicator={false}
            />
        </View>
    );
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

const ListLesson = _ => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Contents" component={ContentsScreen} />
            <Tab.Screen name="Transcript" component={TranscriptScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    contentsBox: {
        margin: 20,
        top: -30,
        height: '100%',
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