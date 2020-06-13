import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';

import Styles from '../../Common/Styles';
import DownloadItem from './DownloadItem/downloadItem';
import Separator from '../../Common/Separator';
import { DownloadsContext } from '../../../provider/downloads-provider';

const Download = props => {
    const {downloads} = useContext(DownloadsContext);

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
                data = {downloads}
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