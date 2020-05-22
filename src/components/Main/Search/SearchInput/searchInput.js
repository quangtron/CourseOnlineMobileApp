import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';

import Styles from '../../../Common/Styles';

const SearchInput = _ => {
    return(
        <View style={styles.search}>
            <TextInput
                style={styles.inputSearch}
                autoFocus={true}
                clearButtonMode='always'
                placeholder='Enter your keyword'
            />
            <TouchableOpacity>
                <Text style={[Styles.text(18, '#000', 'normal'), {paddingLeft: 10}]}>Cancle</Text>
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