import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import Styles from '../../Common/Styles';
import DownloadItem from '../../Main/Download/DownloadItem/downloadItem';
import Separator from '../../Common/Separator';

const ListCourses = props => {
    const { data, title } = props.route.params.item;

    props.navigation.setOptions({title: `List ${title}`});

    return(
        <View style={styles.list}>
            <View style={styles.headerSection}>
                <Text style={Styles.text(22, '#000', 'bold')}>{title}</Text>
            </View>
            <FlatList
                style = {{marginTop: 30}}
                data = {data}
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