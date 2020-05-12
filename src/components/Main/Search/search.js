import React from 'react';
import { View, SectionList, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import DownloadItem from '../Download/DownloadItem/downloadItem';
import Styles from '../../Common/Styles';

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
                    duration: '42 hours'
                },
                {
                    id: 2,
                    title: 'React Native 2',
                    img: require('../../../../assets/bgLogin.jpg'),
                    courses: 6,
                    duration: '42 hours'
                },
            ],
        },
        {
            title: 'Channels',
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
            title: 'Bookmarks',
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
    ];

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

    return(
        <View style={{margin: 20}}>
            <View>
                {renderSearchView()}
            </View>
            <SectionList
                sections = {results}
                renderItem = {({item}) => <DownloadItem item={item} />}
                renderSectionHeader = {({section: {title, data}}) => 
                    <View style={styles.headerSection}>
                        <Text style={Styles.text(18, '#000', 'bold')}>{title}</Text>
                        <TouchableOpacity>
                            <Text style={Styles.text(14, '#000', 'normal')}>{`${data.length} results`} ></Text>
                        </TouchableOpacity>
                    </View>
                }
                ItemSeparatorComponent = {renderSeparator}
                showsVerticalScrollIndicator={false}
                // ListHeaderComponent = {_ => searchView()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerSection: {
        // marginTop: 10,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    search: {
        marginTop: 40,
        paddingBottom: 30,
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