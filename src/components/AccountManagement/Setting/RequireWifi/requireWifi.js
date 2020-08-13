import React, { useState, useContext } from 'react';
import { Text, StyleSheet, View, Switch } from 'react-native';

import Styles from '../../../Common/Styles';
import { SettingCommonContext } from '../../../../provider/settingCommon-provider';

const RequireWifi = _ => {
    const [isEnabledWifiStream, setIsEnabledWifiStream] = useState(false);
    const {language, setLanguage} = useContext(SettingCommonContext);

    const toggleSwitchWifiStream = _ => setIsEnabledWifiStream(previousState => !previousState);
    const toggleSwitchWifiLanguage = _ => setLanguage(!language);

    return(
        <View>
            <View style={styles.button}>
                <Text style={Styles.text(18, '#000', 'normal')}>{language ? 'Change theme' : 'Đổi theme'}</Text>
                <Switch 
                    trackColor={{ false: "#fff", true: "#40C4FF" }}
                    thumbColor={ isEnabledWifiStream ? "#f5dd4b" : "#fff"}
                    ios_backgroundColor = "#F5F5F5"
                    onValueChange={toggleSwitchWifiStream}
                    value={isEnabledWifiStream}
                />
            </View>
            <View style={[styles.button, {marginBottom: 20}]}>
                <Text style={Styles.text(18, '#000', 'normal')}>{language ? 'Return previous language' : 'Đổi ngôn ngữ'}</Text>
                <Switch 
                    trackColor={{ false: "#fff", true: "#40C4FF" }}
                    thumbColor={ language ? "#f5dd4b" : "#fff"}
                    ios_backgroundColor = "#F5F5F5"
                    onValueChange={toggleSwitchWifiLanguage}
                    value={language}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default RequireWifi;