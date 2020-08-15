import React, { useState, useEffect, useContext } from 'react';
import { View, ImageBackground, TextInput, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';

import Styles from '../../Common/Styles'
import { ScreenKey } from '../../../global/constants';
import { AuthenticationContext } from '../../../provider/authentication-provider';

const Login = props => {
    const [email, setEmail] = useState('1612745@student.hcmus.edu.vn');
    const [password, setPassword] = useState('12345678');
    const authenticationContext = useContext(AuthenticationContext);

    useEffect(() => {
        if(authenticationContext.state.isLogined){
            resetForm();
            props.navigation.navigate(ScreenKey.MainTab);
        } else {
            console.log('Login failed!', authenticationContext.state.message);
        }
    }, [authenticationContext.state.isLogined])

    const renderResultLogin = status => {
        if(!status.message && !status.isLogining){
            return <View />
        } else if(status.isLogined) {
            return <Text style={{color: '#d32f2f'}}>Đăng nhập thành công!</Text>
        } else {
            return <Text style={{color: '#d32f2f'}}>{status.message}</Text>
        }
    }

    const resetForm = () => {
        setEmail('');
        setPassword('');
        authenticationContext.state.message = null;
        authenticationContext.state.isLogining = false;
    }

    const onPressLogin = () => {
        authenticationContext.login(email, password);
    }

    const onPressRegister = _ => {
        resetForm();
        props.navigation.navigate(ScreenKey.VerifyPassword);
    }

    const onPressForgetPassword = _ =>{
        resetForm();
        props.navigation.navigate(ScreenKey.Register, {email: ''});
    }

    const screenWidth = Math.round(Dimensions.get('window').width);

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../../../assets/bgLogin.jpg')} style={styles.bgImage}>
                <Text style={[Styles.text(30, '#F06292', 'bold'), styles.txtShadow]}>COURSE ONLINE</Text>
                <View style={styles.box}>
                    <Image source={require('../../../../assets/user.png')} style={styles.userImg} />
                    <Text style={[Styles.text(35, '#ffebee', 'bold'), {marginTop: 60, marginBottom: 60,}]}>Đăng nhập</Text>
                    <View>
                        <TextInput
                            style={styles.inputLayout(screenWidth)}
                            placeholder='Nhập email'
                            placeholderTextColor='#fff'
                            value={email}
                            onChangeText={(text) => {setEmail(text)}}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.inputLayout(screenWidth)}
                            placeholder='Nhập mật khẩu'
                            placeholderTextColor='#fff'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => {setPassword(text)}}
                        />
                    </View>
                    {renderResultLogin(authenticationContext.state)}
                    <TouchableOpacity onPress={onPressForgetPassword}>
                        <Text style={[Styles.text(13, '#FFF59D', 'normal')]}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[Styles.btnLayout(120, 40, '#ffebee')]}
                        onPress={() => onPressLogin()}
                    >
                        <Text style={Styles.text(20, '#000', 'normal')}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <Text style={[Styles.text(13, '#fff', 'normal')]}>Hoặc</Text>
                    <TouchableOpacity style={{marginBottom: 20}} onPress={onPressRegister}>
                        <Text style={Styles.text(13, '#FFF59D', 'normal')}>Tạo tài khoản mới!</Text>
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
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box: {
        alignItems: 'center',
        width: '80%',
        height: '60%',

        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,.3)',
        justifyContent: 'space-around'
    },
    userImg: {
        position: 'absolute',
        marginTop: -60,

        width: 100,
        height: 100,
    },
    inputLayout: (x) => {
        return {
            width: x*6.5/10,
            padding: 5,
            marginBottom: 20,
    
            fontSize: 16,
            color: '#fff',
            backgroundColor: 'transparent',
            borderBottomWidth: 2,
            borderBottomColor: '#fff',
        }
    },
    txtShadow: {
        textShadowOffset: {
            height: 2,
            width: 2,
        },
        textShadowColor: '#F06292',
        textShadowRadius: 5,
        marginBottom: '-20%',
    },
})

export default Login;