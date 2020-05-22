import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';

import Styles from '../../Common/Styles';
import DownloadItem from './DownloadItem/downloadItem';
import Separator from '../../Common/Separator';

const Download = props => {
    const listDownloads = [
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
                <Text style={Styles.text(18, '#000', 'bold')}>Downloads</Text>
                <TouchableOpacity>
                    <Text style={Styles.text(14, '#00838F', 'normal')}>Remove all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style = {{marginTop: 30}}
                data = {listDownloads}
                renderItem = {({item}) => <DownloadItem item={item} navigation={props.navigation} />}
                ItemSeparatorComponent = {Separator}
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    download: {
        margin: 20,
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default Download;