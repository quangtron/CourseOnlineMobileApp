import React, { useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Styles from '../../../Common/Styles';
import DownloadItem from '../../Download/DownloadItem/downloadItem';
import Separator from '../../../Common/Separator';
import AuthorsResult from '../AuthorsResult/authorsResult';
import { MainContext } from '../../../../provider/main-provider';
import { searchCP, searchAuthors } from '../../../../core/services/search-services';
import { SearchContext } from '../../../../provider/search-provider';
import { ScreenKey } from '../../../../global/constants';
import { AuthorsContext } from '../../../../provider/authors-provider';

const SearchByName = props => {
    const {main} = useContext(MainContext);
    const {search} = useContext(SearchContext);
    const {authors} = useContext(AuthorsContext);

    let data = [];

    if(props.name === ScreenKey.Courses){
        data = searchCP(search, main.Courses);
    } else if(props.name === ScreenKey.Paths){
        data = searchCP(search, main.Paths);
    } 
    else if(props.name === ScreenKey.Authors){
        data = searchAuthors(search, main.Courses, authors);
    }

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