import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splashscreen from '../../components/Others/Splashscreen/splashscreen';
import Login from '../../components/Authentication/Login/login';
import Register from '../../components/Authentication/Register/register';
import VerifyPassword from '../../components/Authentication/VerifyPassword/verifyPassword';
import ForgetPassword from '../../components/Authentication/ForgetPassword/forgetPassword';
import mainTabScreen from './MainTabScreen';
import { ScreenKey } from '../constants';

const MainStack = createStackNavigator();

const mainStackScreen = _ => {
  return(
    <MainStack.Navigator>
      <MainStack.Screen
        name={ScreenKey.Splashscreen} 
        component={Splashscreen} 
        options={{headerShown: false}}
      />
      <MainStack.Screen name={ScreenKey.Login} component={Login} options={{headerShown: false}} />
      <MainStack.Screen name={ScreenKey.Register} component={Register} options={{headerShown: false}} />
      <MainStack.Screen name={ScreenKey.VerifyPassword} component={VerifyPassword} options={{headerShown: false}} />
      <MainStack.Screen name={ScreenKey.ForgetPassword} component={ForgetPassword} options={{headerShown: false}} />
      <MainStack.Screen name={ScreenKey.MainTab} component={mainTabScreen} options={{headerShown: false}} />
    </MainStack.Navigator>
  )
}

export default mainStackScreen;