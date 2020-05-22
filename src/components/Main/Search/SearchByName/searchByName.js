import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Styles from '../../../Common/Styles';
import DownloadItem from '../../Download/DownloadItem/downloadItem';
import Separator from '../../../Common/Separator';
import AuthorsResult from '../AuthorsResult/authorsResult';

const SearchByName = props => {
    const { data } = props.courses;

    const renderItem = item => {
        if(!item.title){
            return <AuthorsResult item={item} navigation={props.navigation} />
        }
        return <DownloadItem item={item} navigation={props.navigation} />
    }
    
    return(
        <View style={styles.courses}>
            <View style={styles.results}>
                <Text style={Styles.text(18, '#000', 'bold')}>{`${data.length} results`}</Text>
                <TouchableOpacity>
                    <Ionicons name="ios-arrow-down" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data = {data}
                renderItem = {({item}) => renderItem(item)}
                ItemSeparatorComponent = {Separator}
                showsVerticalScrollIndicator = {false}
                style={styles.listCourses}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    courses: {
        margin: 20,
        marginTop: 30,
        marginBottom: 15,
    },
    results: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listCourses: {
        marginTop: 30,
        height: 600,
    },
})

export default SearchByName;