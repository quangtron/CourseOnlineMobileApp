import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';

import Styles from '../../Common/Styles';
import Separator from '../../Common/Separator';
import { SettingCommonContext } from '../../../provider/settingCommon-provider';

const Download = props => {
    const {language, theme} = useContext(SettingCommonContext);

    return(
        <View style={styles.container(theme)}>
            <View style={styles.download}>
                <View style={styles.headerSection}>
                    <Text style={Styles.text(18, theme ? '#fff' : '#000', 'bold')}>{language ? 'Not course available' : 'Chưa có khoá học nào'}</Text>
                    {/* <TouchableOpacity>
                        <Text style={Styles.text(14, '#00838F', 'normal')}>Remove all</Text>
                    </TouchableOpacity> */}
                </View>
                {/* <FlatList
                    style = {{marginTop: 30}}
                    data = {downloads}
                    renderItem = {({item}) => <DownloadItem item={item} navigation={props.navigation} />}
                    ItemSeparatorComponent = {Separator}
                    showsVerticalScrollIndicator = {false}
                /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: (bool) => {
        return {
            flex: 1,
            backgroundColor: bool ? '#212121' : '#fff',
        }
    },
    download: {
        margin: 20,
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default Download;