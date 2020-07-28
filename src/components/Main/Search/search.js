import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import SearchInput from './SearchInput/searchInput';
import SearchTabResults from './SearchTabResults/searchTabResults';

const Search = props => {
    const [keyword, setKeyword] = useState('');

    const onSearchKeyword = (keyword) => {
        setKeyword(keyword);
    }

    return(
        <ScrollView scrollEnabled={false}>
            <SearchInput onSearchKeyword={onSearchKeyword} />
            <SearchTabResults navigation={props.navigation} keyword={keyword} />
        </ScrollView>
    );
}

export default Search;