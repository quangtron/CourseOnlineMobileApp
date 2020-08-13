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
    const {language, setLanguage} = useContext(SettingCommonContext);

    const onSignOut = _ => {
        props.navigation.navigate(ScreenKey.Login);
    }

    return(
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <AccountSetting navigation={props.navigation} />
            <Separator />
            <RequireWifi />
            <Separator />
            {/* <OthersSetting /> */}
            {/* <Separator /> */}
            <View style={styles.appVersion}>
                <Text style={Styles.text(18, '#000', 'normal')}>{language ? 'App Version' : 'Phiên bản'}</Text>
                <Text style={Styles.text(18, '#000', 'normal')}>2.9.5</Text>
            </View>
            <TouchableOpacity style={styles.btnLayout} onPress={onSignOut}>
                <Text style={Styles.text(18, '#00B0FF', 'normal')}>{language ? 'Sign Out' : 'Đăng xuất'}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',

        height: 50,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#00B0FF',
        borderRadius: 10,
    },
})

export default Setting;
