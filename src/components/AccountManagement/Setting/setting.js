import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import AccountSetting from './AccountSetting/accountSetting';
import Separator from '../../Common/Separator';
import RequireWifi from './RequireWifi/requireWifi';
import OthersSetting from './OthersSetting/othersSetting';
import Styles from '../../Common/Styles'
import { ScreenKey } from '../../../global/constants';
import { SettingCommonContext } from '../../../provider/settingCommon-provider';

const Setting = props => {
    const {language, theme} = useContext(SettingCommonContext);

    const onSignOut = _ => {
        props.navigation.navigate(ScreenKey.Login);
    }

    return(
        <View style={styles.container(theme)}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <AccountSetting navigation={props.navigation} />
                <Separator />
                <RequireWifi />
                <Separator />
                {/* <OthersSetting /> */}
                {/* <Separator /> */}
                <View style={styles.appVersion}>
                    <Text style={Styles.text(18, theme ? '#fff' : '#000', 'normal')}>{language ? 'App Version' : 'Phiên bản'}</Text>
                    <Text style={Styles.text(18, theme ? '#fff' : '#000', 'normal')}>2.9.5</Text>
                </View>
                <TouchableOpacity style={styles.btnLayout} onPress={onSignOut}>
                    <Text style={Styles.text(18, '#fff', 'normal')}>{language ? 'Sign Out' : 'Đăng xuất'}</Text>
                </TouchableOpacity>
            </ScrollView>
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
    scrollView: {
        margin: 20,
        marginTop: 0,
        marginBottom: 0,
    },
    appVersion: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnLayout: {
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',

        height: 50,
        backgroundColor: '#00B0FF',
        borderRadius: 10,
    },
})

export default Setting;
