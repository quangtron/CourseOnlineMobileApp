import React, { useEffect, useContext, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import DownloadItem from '../../Main/Download/DownloadItem/downloadItem';
import Separator from '../../Common/Separator';
import { AuthenticationContext } from '../../../provider/authentication-provider';

const ListCourses = props => {
    const { items, title, dataCat } = props.route.params;
    const authenticationContext = useContext(AuthenticationContext);
    const [dataLiked, setDataLiked] = useState([]);

    useEffect(() => {
        if(title === 'KHOÁ HỌC ĐÃ THÍCH' || title === 'MY FAVORITE COURSES'){
            setDataLiked(authenticationContext.state.coursesLiked);
        }
    },[authenticationContext.state.coursesLiked])

    props.navigation.setOptions({title: title});

    return(
        <View style={styles.list}>
            <FlatList
                style = {{marginTop: 10}}
                data = {dataCat ? dataCat.courses.data : ((title === 'KHOÁ HỌC ĐÃ THÍCH' || title === 'MY FAVORITE COURSES') ? dataLiked : items)}
                renderItem = {({item}) => <DownloadItem item={item} navigation={props.navigation} />}
                ItemSeparatorComponent = {Separator}
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        margin: 20,
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default ListCourses;