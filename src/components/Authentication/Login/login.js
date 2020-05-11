import React from 'react';
import { View, ImageBackground, TextInput, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import { Styles } from '../../Common'

const Login = _ => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../../../assets/bgLogin.jpg')} style={styles.bgImage}>
                <Text style={[Styles.text(30, '#F06292', 'bold'), styles.txtShadow, {top: '-13%'}]}>COURSE ONLINE</Text>
                <View style={styles.box}>
                    <Image source={require('../../../../assets/user.png')} style={styles.userImg} />
                    <Text style={[Styles.text(35, '#ffebee', 'bold'), {marginTop: 60, marginBottom: 60,}]}>Login</Text>
                    <View>
                        <TextInput style={styles.inputLayout} placeholder='Username' placeholderTextColor='#fff' />
                    </View>
                    <View>
                        <TextInput style={styles.inputLayout} placeholder='Password' placeholderTextColor='#fff' secureTextEntry={true} />
                    </View>
                    <TouchableOpacity>
                        <Text style={[Styles.text(13, '#FFF59D', 'normal'), {right: '-15%'}]}>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLayout}>
                        <Text style={Styles.text(20, '#000', 'normal')}>Login</Text>
                    </TouchableOpacity>
                    <Text style={[Styles.text(13, '#fff', 'normal'), {bottom: '-14%'}]}>Or</Text>
                    <TouchableOpacity style={{bottom: '-16%'}}>
                        <Text style={Styles.text(13, '#FFF59D', 'normal')}>Create New Account!</Text>
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
    btnLayout: {
        bottom: '-10%',
        justifyContent: 'center',
        alignItems: 'center',

        width: 100,
        height: 40,

        backgroundColor: '#ffebee',
        borderRadius: 20,
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

export default Login;