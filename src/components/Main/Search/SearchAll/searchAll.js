import React, { useState, useContext } from 'react';
import { View, SectionList, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Styles from '../../../Common/Styles';
import DownloadItem from '../../Download/DownloadItem/downloadItem';
import Separator from '../../../Common/Separator';
import AuthorsResult from '../AuthorsResult/authorsResult';
import { MainContext } from '../../../../provider/main-provider';
import { SearchContext } from '../../../../provider/search-provider';
import { AuthorsContext } from '../../../../provider/authors-provider';
import { ScreenKey } from '../../../../global/constants';
import { searchCP, searchAuthors } from '../../../../core/services/search-services';

const SearchAll = props => {
    const {main} = useContext(MainContext);
    const {search} = useContext(SearchContext);
    const {authors} = useContext(AuthorsContext);

    const data1 = searchCP(search, main.Courses);
    const data2 = searchCP(search, main.Paths);
    const data3 = searchAuthors(search, main.Courses, authors);

    let allData = [];
    allData.push({title: ScreenKey.Courses, data: data1});
    allData.push({title: ScreenKey.Paths, data: data2});
    allData.push({title: ScreenKey.Authors, data: data3});

    const onPressShowAll = title => {
        props.navigation.navigate(title);
    }

    const renderSectionHeader = (title, data) => {
        return(
            <View style={styles.headerSection}>
                <Text style={Styles.text(18, '#000', 'bold')}>{title}</Text>
                <TouchableOpacity onPress={_ => onPressShowAll(title)}>
                    <Text style={Styles.text(14, '#000', 'normal')}>{`${data.length} results`}</Text>
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
                sections = {allData}
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