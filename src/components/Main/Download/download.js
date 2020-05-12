import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';

import Styles from '../../Common/Styles';
import DownloadItem from './DownloadItem/downloadItem';

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

    const showListDownloads = listDownloads => {
        let result = null;

        result = listDownloads.map((item, index) => <DownloadItem key={index} item={item} />)

        return result;
    }

    const renderSeparator = _ => {
        return(
            <View
                style={{
                    height: 1,
                    marginRight: 10,
                    marginBottom: 20,
                    backgroundColor: '#E0E0E0',
                }}
            />
        );
    }

    return(
        <View style={styles.download}>
            <View style={styles.headerSection}>
                <Text style={Styles.text(18, '#000', 'bold')}>{props.title}</Text>
                <TouchableOpacity>
                    <Text style={Styles.text(14, '#00838F', 'normal')}>Remove all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style = {{marginTop: 30}}
                data = {listDownloads}
                renderItem = {({item}) => <DownloadItem item={item} />}
                ItemSeparatorComponent = {renderSeparator}
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

export default Download;