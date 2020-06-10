import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Styles from '../../Common/Styles';
import Separator from '../../Common/Separator';

const Profile = props => {
    console.log(props)
    return(
        <View style={{margin: 20}}>
            <View style={styles.userInfor}>
                <Image style={styles.image} source={require('../../../../assets/user.png')} />
                <View style={{marginLeft: 10}}>
                    <Text style={Styles.text(18, '#000', 'normal')}>Ha Quang Trong</Text>
                    <Text style={Styles.text(16, '#9E9E9E', 'normal')}>Ton</Text>
                </View>
            </View>
            <Separator />
            <Text style={Styles.text(18, '#000', 'normal')}>Date: May 9, 2020</Text>
            <TouchableOpacity style={styles.btnLayout}>
                <Text style={Styles.text(18, '#00B0FF', 'normal')}>Change Password</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    userInfor: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
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

export default Profile;