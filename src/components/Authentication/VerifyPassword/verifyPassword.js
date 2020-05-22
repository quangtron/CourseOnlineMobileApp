import React from 'react';
import { View, ImageBackground, TextInput, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Styles from '../../Common/Styles'
import { ScreenKey } from '../../../global/constants';

const VerifyPassword = props => {
    const onPressVerify = _ => {
        props.navigation.navigate(ScreenKey.MainTab);
    }

    const onPressBack = _ => {
        props.navigation.navigate(ScreenKey.Login);
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../../../assets/bgLogin.jpg')} style={styles.bgImage}>
                <Text style={[Styles.text(30, '#F06292', 'bold'), styles.txtShadow, {top: '-13%'}]}>COURSE ONLINE</Text>
                <View style={styles.box}>
                    <Image source={require('../../../../assets/user.png')} style={styles.userImg} />
                    <Text style={[Styles.text(35, '#ffebee', 'bold'), {marginTop: 60, marginBottom: 40,}]}>Register</Text>
                    <View>
                        <TextInput style={styles.inputLayout} placeholder='Enter your username' placeholderTextColor='#fff' />
                    </View>
                    <View>
                        <TextInput style={styles.inputLayout} placeholder='Enter your password' placeholderTextColor='#fff' secureTextEntry={true} />
                    </View>
                    <View>
                        <TextInput style={styles.inputLayout} placeholder='Confirm your password' placeholderTextColor='#fff' secureTextEntry={true} />
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            style={[Styles.btnLayout(100, 40, '#ffebee'), {marginBottom: 30}]}
                            onPress={onPressVerify}
                        >
                            <Text style={Styles.text(20, '#000', 'normal')}>Verify</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={Styles.text(14, '#FFF59D', 'normal')} onPress={onPressBack}>Back to Login!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        margin: 0,
        width: '100%',
        height: '100%',
    },
    buttons: {
        marginTop: 50,
        alignItems: 'center',
    },
    bgImage: {
        width: '100%',
        height: '100%',

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        alignItems: 'center',
        width: '70%',
        height: '50%',

        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    userImg: {
        position: 'absolute',
        top: -50,

        width: 100,
        height: 100,
    },
    inputLayout: {
        width: 200,
        padding: 5,
        marginBottom: 20,

        fontSize: 16,
        color: '#fff',
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
    },
    txtShadow: {
        textShadowOffset: {
            height: 2,
            width: 2,
        },
        textShadowColor: '#F06292',
        textShadowRadius: 5,
    },
})

export default VerifyPassword;