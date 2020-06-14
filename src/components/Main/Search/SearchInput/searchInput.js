import React, { useState, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';

import Styles from '../../../Common/Styles';
import { SearchContext } from '../../../../provider/search-provider';

const SearchInput = _ => {
    const {search, setSearch} = useContext(SearchContext);

    return(
        <View style={styles.search}>
            <TextInput
                style={styles.inputSearch}
                autoFocus={true}
                clearButtonMode='always'
                placeholder='Enter your keyword'
                value={search}
                onChangeText={(search) => setSearch(search)}
            />
            <TouchableOpacity onPress={() => setSearch('')}>
                <Text style={[Styles.text(18, '#000', 'normal'), {paddingLeft: 10}]}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        margin: 20,
        marginTop: 40,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputSearch: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        borderRadius: 6,
        padding: 10,
        fontSize: 20,
    },
})

export default SearchInput;