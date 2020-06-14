import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Alert } from 'react-native';

import ShareScreen from '../../../Others/Share/share';
import { DownloadsContext } from '../../../../provider/downloads-provider';
import { BookmarksContext } from '../../../../provider/bookmarks-provider';
import { removeItemFromBookmarks } from '../../../../core/services/bookmarks-services';

const ButtonInformation = props => {
    const { downloads, setDownloads } = useContext(DownloadsContext);
    const { bookmarks, setBookmarks } = useContext(BookmarksContext);
    const {img, img2, name, checked} = props.item;

    const onHandlePress = name => {
        if(name === 'Download'){
            const listDownloads = downloads;

            listDownloads.push(data);
            setDownloads(listDownloads);
        } else if(name === 'Bookmark'){
            let listBookmarks = bookmarks;

            if(!checked){
                listBookmarks.push(props.data);
                setBookmarks(listBookmarks);
                props.onToggleChange(!checked);
                Alert.alert('Insert Successfully!');
            } else {
                listBookmarks = removeItemFromBookmarks(props.data.title, bookmarks);
                setBookmarks(listBookmarks);
                props.onToggleChange(!checked);
                Alert.alert('Remove Successfully!');
            }
        }
    }

    return(
        <View>
            <TouchableOpacity style={styles.itemCenter} onPress={_ => onHandlePress(name)}>
                <View style={styles.circleBtn}>
                    <Image source={checked === true ? img2 : img} style={styles.image} />
                </View>
                <Text style={styles.textLayout}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemCenter: {
        marginRight: '15%',
        alignItems: 'center',
    },
    image: {
        alignSelf: 'center',
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    textLayout: {
        marginTop: 10,
        textAlign: 'center',
    },
    circleBtn: {
        width: 60,
        height: 60,
        backgroundColor: '#E0E0E0',
        borderRadius: 50,
        justifyContent: 'center',
    },
})

export default ButtonInformation;