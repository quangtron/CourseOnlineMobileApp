import React from 'react';
import { View, ImageBackground, TextInput, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Styles from '../../Common/Styles'

const Register = _ => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../../../assets/bgLogin.jpg')} style={styles.bgImage}>
                <Text style={[Styles.text(30, '#F06292', 'bold'), styles.txtShadow, {top: '-13%'}]}>COURSE ONLINE</Text>
                <View style={styles.box}>
                    <Image source={require('../../../../assets/user.png')} style={styles.userImg} />
                    <Text style={[Styles.text(35, '#ffebee', 'bold'), {marginTop: 60, marginBottom: 40,}]}>Register</Text>
                    <View>
                        <TextInput style={styles.inputLayout} placeholder='Enter your email' placeholderTextColor='#fff' />
                    </View>
                    <View>
                        <TextInput style={styles.inputLayout} placeholder='Enter your username' placeholderTextColor='#fff' />
                    </View>
                    <View>
                        <TextInput style={styles.inputLayout} placeholder='Enter your password' placeholderTextColor='#fff' secureTextEntry={true} />
                    </View>
                    <View>
                        <TextInput style={styles.inputLayout} placeholder='Confirm your password' placeholderTextColor='#fff' secureTextEntry={true} />
                    </View>
                    <TouchableOpacity style={[Styles.btnLayout(100, 40, '#ffebee'), {bottom: '-2%'}]}>
                        <Text style={Styles.text(20, '#000', 'normal')}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{bottom: '-7%'}}>
                        <Text style={Styles.text(14, '#FFF59D', 'normal')}>Back to Login!</Text>
                    </TouchableOpacity>
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

export default Register;