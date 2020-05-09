import React from 'react';
import { View, ImageBackground, TextInput, StyleSheet, Image, Text, Button, TouchableOpacity } from 'react-native';

const Login = _ => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../../../assets/bgLogin.jpg')} style={styles.bgImage}>
                <Text style={[styles.txt(30, '#F06292', 'bold'), styles.txtShadow, {top: '-13%'}]}>COURSE ONLINE</Text>
                <View style={styles.box}>
                    <Image source={require('../../../../assets/user.png')} style={styles.userImg} />
                    <Text style={[styles.txt(35, '#ffebee', 'bold'), {marginTop: 60, marginBottom: 60,}]}>Login</Text>
                    <View>
                        <TextInput style={styles.inputLayout} placeholder='Username' placeholderTextColor='#fff' />
                    </View>
                    <View>
                        <TextInput style={styles.inputLayout} placeholder='Password' placeholderTextColor='#fff' secureTextEntry={true} />
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.txt(13, '#FFF59D', 'normal'), {right: '-15%'}]}>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLayout}>
                        <Text style={styles.txt(20, '#000', 'normal')}>Login</Text>
                    </TouchableOpacity>
                    <Text style={[styles.txt(13, '#fff', 'normal'), {bottom: '-14%'}]}>Or</Text>
                    <TouchableOpacity style={{bottom: '-16%'}}>
                        <Text style={styles.txt(13, '#FFF59D', 'normal')}>Create New Account!</Text>
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
    txt: (size, color, fw) => {
        return {
            fontSize: size,
            color: color,
            fontWeight: fw,
        }
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