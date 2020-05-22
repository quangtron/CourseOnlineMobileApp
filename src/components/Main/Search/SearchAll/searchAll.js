import React from 'react';
import { View, SectionList, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Styles from '../../../Common/Styles';
import DownloadItem from '../../Download/DownloadItem/downloadItem';
import Separator from '../../../Common/Separator';
import AuthorsResult from '../AuthorsResult/authorsResult';

const SearchAll = props => {
    const onPressShowAll = title => {
        props.navigation.navigate(title);
    }

    const renderSectionHeader = (title, data) => {
        return(
            <View style={styles.headerSection}>
                <Text style={Styles.text(18, '#000', 'bold')}>{title}</Text>
                <TouchableOpacity onPress={_ => onPressShowAll(title)}>
                    <Text style={Styles.text(14, '#000', 'normal')}>{`${data.length} results`} ></Text>
                </TouchableOpacity>
            </View>
        );
    }

    const renderItem = item => {
        if(!item.title){
            return <AuthorsResult item={item} navigation={props.navigation} />
        }
        return <DownloadItem item={item} navigation={props.navigation} />
    }

    return(
        <View style={styles.searchAll}>
            <SectionList
                sections = {props.all}
                renderItem = {({item}) => renderItem(item)}
                renderSectionHeader = {({section: {title, data}}) => renderSectionHeader(title, data)}
                ItemSeparatorComponent = {Separator}
                showsVerticalScrollIndicator={false}
                style={styles.sectionList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchAll: {
        margin: 20,
        marginTop: 0,
    },
    headerSection: {
        marginBottom: 15,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
    },
    sectionList: {
        height: 670,
    },
})

export default SearchAll;