import React, { useContext } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Styles from '../../Common/Styles';
import Separator from '../../Common/Separator';
import { AuthenticationContext } from '../../../provider/authentication-provider';

const Profile = props => {
    const authenticationContext = useContext(AuthenticationContext);
    const { avatar, name, email, phone } = authenticationContext.state.user;

    return(
        <View style={{margin: 20}}>
            <View style={styles.userInfor}>
                <Image style={styles.image} source={{uri: avatar}} />
                <View style={{marginLeft: 10}}>
                    <Text style={Styles.text(18, '#000', 'normal')}>{name}</Text>
                    <Text style={Styles.text(16, '#9E9E9E', 'normal')}>{email}</Text>
                </View>
            </View>
            <Separator />
            <Text style={[Styles.text(18, '#000', 'normal'), {marginBottom: 10}]}>Name: {name}</Text>
            <Text style={[Styles.text(18, '#000', 'normal'), {marginBottom: 10}]}>Email: {email}</Text>
            <Text style={[Styles.text(18, '#000', 'normal'), {marginBottom: 10}]}>Phone number: {phone}</Text>
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
        borderRadius: 50,
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