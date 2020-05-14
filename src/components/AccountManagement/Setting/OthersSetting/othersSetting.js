import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Styles from '../../../Common/Styles';

const OthersSetting = _ => {
    return(
        <View style={styles.accountSetting}>
            <TouchableOpacity style={styles.button}>
                <Text style={Styles.text(18, '#000', 'normal')}>Send Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={Styles.text(18, '#000', 'normal')}>Contact Support</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    accountSetting: {
        marginBottom: 10,
    },
    account: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    button: {
        margin: 10,
    },
})

export default OthersSetting;
