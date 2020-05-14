import React from 'react';
import { View, SectionList, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import Styles from '../../Common/Styles';
import DownloadItem from '../Download/DownloadItem/downloadItem';
import Separator from '../../Common/Separator';
import AuthorsResult from './AuthorsResult/authorsResult';

const Search = _ => {
    const results = [
        {
            title: 'Courses',
            data: [
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
            ],
        },
        {
            title: 'Paths',
            data: [
                {
                    id: 1,
                    title: 'React',
                    img: require('../../../../assets/bgLogin.jpg'),
                    courses: 5,
                },
                {
                    id: 2,
                    title: 'React Native 2',
                    img: require('../../../../assets/bgLogin.jpg'),
                    courses: 6,
                },
            ],
        },
        {
            title: 'Authors',
            data: [
                {
                    id: 1,
                    img: require('../../../../assets/bgLogin.jpg'),
                    author: 'T1',
                    courses: 5,
                },
                {
                    id: 2,
                    img: require('../../../../assets/bgLogin.jpg'),
                    author: 'T2',
                    courses: 6,
                },
                {
                    id: 3,
                    img: require('../../../../assets/bgLogin.jpg'),
                    author: 'T3',
                    courses: 7,
                },
            ],
        },
    ];

    const renderSearchView = _ => {
        return(
            <View style={styles.search}>
                <TextInput
                    style={styles.inputSearch}
                    autoFocus={true}
                    clearButtonMode='always'
                    placeholder='Enter your keyword'
                />
                <TouchableOpacity>
                    <Text style={[Styles.text(16, '#000', 'normal'), {paddingLeft: 10}]}>Cancle</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const renderSectionHeader = (title, data) => {
        return(
            <View style={styles.headerSection}>
                <Text style={Styles.text(18, '#000', 'bold')}>{title}</Text>
                <TouchableOpacity>
                    <Text style={Styles.text(14, '#000', 'normal')}>{`${data.length} results`} ></Text>
                </TouchableOpacity>
            </View>
        );
    }

    const renderItem = item => {
        if(!item.title){
            return <AuthorsResult item={item} />
        }
        return <DownloadItem item={item} />
    }

    return(
        <View style={{margin: 20}}>
            <View>
                {renderSearchView()}
            </View>
            <SectionList
                sections = {results}
                renderItem = {({item}) => renderItem(item)}
                renderSectionHeader = {({section: {title, data}}) => renderSectionHeader(title, data)}
                ItemSeparatorComponent = {Separator}
                showsVerticalScrollIndicator={false}
                // ListHeaderComponent = {_ => searchView()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerSection: {
        marginTop: 40,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    search: {
        marginTop: 40,
        // paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputSearch: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        borderRadius: 6,
        padding: 10,
    }
})

export default Search;