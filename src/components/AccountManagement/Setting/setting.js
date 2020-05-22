import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import AccountSetting from './AccountSetting/accountSetting';
import Separator from '../../Common/Separator';
import RequireWifi from './RequireWifi/requireWifi';
import OthersSetting from './OthersSetting/othersSetting';
import Styles from '../../Common/Styles'

const Setting = _ => {
    return(
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <AccountSetting />
            <Separator />
            <RequireWifi />
            <Separator />
            <OthersSetting />
            <Separator />
            <View style={styles.appVersion}>
                <Text style={Styles.text(18, '#000', 'normal')}>App Version</Text>
                <Text style={Styles.text(18, '#000', 'normal')}>2.77.2568</Text>
            </View>
            <TouchableOpacity style={styles.btnLayout}>
                <Text style={Styles.text(18, '#00B0FF', 'normal')}>Sign Out</Text>
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
