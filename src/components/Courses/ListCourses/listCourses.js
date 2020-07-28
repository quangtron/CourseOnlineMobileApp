import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import DownloadItem from '../../Main/Download/DownloadItem/downloadItem';
import Separator from '../../Common/Separator';

const ListCourses = props => {
    const { items, title } = props.route.params;

    props.navigation.setOptions({title: title});

    return(
        <View style={styles.list}>
            <FlatList
                style = {{marginTop: 10}}
                data = {items.rows || items}
                renderItem = {({item}) => <DownloadItem item={item} navigation={props.navigation} />}
                ItemSeparatorComponent = {Separator}
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        margin: 20,
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default ListCourses;