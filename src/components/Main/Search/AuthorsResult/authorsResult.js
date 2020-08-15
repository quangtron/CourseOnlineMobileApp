import React, { useContext } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

import Styles from '../../../Common/Styles'
import { ScreenKey } from '../../../../global/constants';
import { SettingCommonContext } from '../../../../provider/settingCommon-provider';

const AuthorsResult = props => {
    const { avatar, name, numcourses } = props.item;
    const {language, theme} = useContext(SettingCommonContext);

    const onPressAuthor = item => {
        props.navigation.navigate(ScreenKey.AuthorDetail, {id: item.id})
    }

    return(
        <TouchableOpacity style={styles.item} onPress={_ => onPressAuthor(props.item)}>
            <Image style={styles.image} source={{uri: avatar}} />
            <View style={styles.text}>
                <Text style={{marginBottom: 5, color: theme ? '#fff' : '#000'}}>{name}</Text>
                <Text style={Styles.text(14, '#9E9E9E', 'normal')}>{numcourses} {language ? 'courses' : 'khoá học'}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    text: {
        marginLeft: 10,
        width: '68%',
    }
})

export default AuthorsResult;