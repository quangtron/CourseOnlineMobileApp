import React, { useState } from 'react';
import { Text, StyleSheet, View, Switch } from 'react-native';

import Styles from '../../../Common/Styles';

const RequireWifi = _ => {
    const [isEnabledWifiStream, setIsEnabledWifiStream] = useState(false);
    const [isEnabledWifiDownload, setIsEnabledWifiDownload] = useState(false);

    const toggleSwitchWifiStream = _ => setIsEnabledWifiStream(previousState => !previousState);
    const toggleSwitchWifiDownload = _ => setIsEnabledWifiDownload(previousState => !previousState);

    return(
        <View>
            <View style={styles.button}>
                <Text style={Styles.text(18, '#000', 'normal')}>Require Wi-Fi for streaming</Text>
                <Switch 
                    trackColor={{ false: "#fff", true: "#40C4FF" }}
                    thumbColor={ isEnabledWifiStream ? "#f5dd4b" : "#fff"}
                    ios_backgroundColor = "#F5F5F5"
                    onValueChange={toggleSwitchWifiStream}
                    value={isEnabledWifiStream}
                />
            </View>
            <View style={[styles.button, {marginBottom: 20}]}>
                <Text style={Styles.text(18, '#000', 'normal')}>Require Wi-Fi for streaming</Text>
                <Switch 
                    trackColor={{ false: "#fff", true: "#40C4FF" }}
                    thumbColor={ isEnabledWifiDownload ? "#f5dd4b" : "#fff"}
                    ios_backgroundColor = "#F5F5F5"
                    onValueChange={toggleSwitchWifiDownload}
                    value={isEnabledWifiDownload}
                />
            </View>
            <View style={[styles.button, {marginBottom: 20}]}>
                <Text style={Styles.text(18, '#000', 'normal')}>Change theme</Text>
                <Switch 
                    trackColor={{ false: "#fff", true: "#40C4FF" }}
                    thumbColor={ isEnabledWifiDownload ? "#f5dd4b" : "#fff"}
                    ios_backgroundColor = "#F5F5F5"
                    onValueChange={toggleSwitchWifiDownload}
                    value={isEnabledWifiDownload}
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