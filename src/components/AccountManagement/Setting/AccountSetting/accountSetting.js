import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Styles from '../../../Common/Styles';
import { ScreenKey } from '../../../../global/constants';
import { AuthenticationContext } from '../../../../provider/authentication-provider';

const AccountSetting = props => {
    const {authentication} = useContext(AuthenticationContext)
    const onPressAccount = _ => {
        props.navigation.navigate(ScreenKey.Profile);
    }

    const onPressSub = _ => {
        props.navigation.navigate(ScreenKey.Subscription);
    }

    return(
        <View style={styles.accountSetting}>
            <TouchableOpacity style={styles.account} onPress={onPressAccount}>
                <Image style={styles.image} source={require('../../../../../assets/user.png')} />
                <View style={{marginLeft: 10}}>
                    <Text style={Styles.text(18, '#000', 'normal')}>{authentication.user.fullname}</Text>
                    <Text style={Styles.text(16, '#9E9E9E', 'normal')}>{authentication.user.username}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressAccount}>
                <Text style={Styles.text(18, '#000', 'normal')}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressSub}>
                <Text style={Styles.text(18, '#000', 'normal')}>Subscription</Text>
                <Text style={Styles.text(14, '#9E9E9E', 'normal')}>Individual (Expires: may 31, 2020)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={Styles.text(18, '#000', 'normal')}>Communication Preferences</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    accountSetting: {
        marginTop: 50,
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

export default AccountSetting;
