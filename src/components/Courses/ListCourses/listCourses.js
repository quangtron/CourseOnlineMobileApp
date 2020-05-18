import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';

import Styles from '../../Common/Styles';
import DownloadItem from '../../Main/Download/DownloadItem/downloadItem';
import Separator from '../../Common/Separator';

const ListCourses = _ => {
    const listCourses = [
        {
            id: 1,
            title: 'React Native 1',
            img: require('../../../../assets/bgLogin.jpg'),
            author: 'T1',
            level: 'Beginner',
            released: 'May 11, 2020',
            duration: '38h'
        },
        {
            id: 2,
            title: 'React Native 2',
            img: require('../../../../assets/bgLogin.jpg'),
            author: 'T2',
            level: 'Beginner',
            released: 'May 11, 2020',
            duration: '38h'
        },
        {
            id: 3,
            title: 'React Native 3',
            img: require('../../../../assets/bgLogin.jpg'),
            author: 'T3',
            level: 'Beginner',
            released: 'May 11, 2020',
            duration: '38h'
        },
    ];

    return(
        <View style={styles.download}>
            <View style={styles.headerSection}>
                <Text style={Styles.text(22, '#000', 'bold')}>Software Development</Text>
            </View>
            <FlatList
                style = {{marginTop: 30}}
                data = {listCourses}
                renderItem = {({item}) => <DownloadItem item={item} />}
                ItemSeparatorComponent = {Separator}
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    download: {
        margin: 20,
        marginTop: 60,
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default ListCourses;