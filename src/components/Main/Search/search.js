import React, { useState, useContext } from 'react';
import { ScrollView } from 'react-native';

import SearchInput from './SearchInput/searchInput';
import SearchTabResults from './SearchTabResults/searchTabResults';
import { SettingCommonContext } from '../../../provider/settingCommon-provider';

const Search = props => {
    const {theme} = useContext(SettingCommonContext);
    const [keyword, setKeyword] = useState('');

    const onSearchKeyword = (keyword) => {
        setKeyword(keyword);
    }

    return(
        <ScrollView scrollEnabled={false} style={{backgroundColor: theme ? '#212121' : '#fff'}}>
            <SearchInput onSearchKeyword={onSearchKeyword} />
            <SearchTabResults navigation={props.navigation} keyword={keyword} />
        </ScrollView>
    );
}

export default Search;