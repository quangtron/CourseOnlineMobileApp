import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Login from './src/components/Authentication/Login/login';
import HomeScreen from './src/global/Screens/HomeScreen';
import BrowseScreen from './src/global/Screens/BrowseScreen';
import DownloadScreen from './src/global/Screens/DownloadScreen';
import SearchScreen from './src/global/Screens/SearchScreen';
import Splashscreen from './src/components/Others/Splashscreen/splashscreen';
import { ScreenKey } from './src/global/constants';
import Register from './src/components/Authentication/Register/register';
import ForgetPassword from './src/components/Authentication/ForgetPassword/forgetPassword';
import VerifyPassword from './src/components/Authentication/VerifyPassword/verifyPassword';

const Tab = createBottomTabNavigator();

const mainTabScreen = () => {
  return(
    <Tab.Navigator
        screenOptions = {({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if(route.name === ScreenKey.Home){
              iconName = 'ios-home';
            }
            else if(route.name === ScreenKey.Browse) {
              iconName = 'md-browsers';
            }
            else if(route.name === ScreenKey.Download) {
              iconName = 'md-download';
            } else {
              iconName = 'md-search';
            }

            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions = {{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        }}
        initialRouteName={ScreenKey.Home}
      >
        <Tab.Screen name={ScreenKey.Home} component={HomeScreen} />
        <Tab.Screen name={ScreenKey.Browse} component={BrowseScreen} />
        <Tab.Screen name={ScreenKey.Download} component={DownloadScreen} />
        <Tab.Screen name={ScreenKey.Search} component={SearchScreen} />
      </Tab.Navigator>
  );
}

const MainStack = createStackNavigator();

const mainStackScreen = _ => {
  return(
    <MainStack.Navigator>
      {/* <MainStack.Screen
        name={ScreenKey.Splashscreen} 
        component={Splashscreen} 
        options={{headerShown: false}}
      /> */}
      <MainStack.Screen name={ScreenKey.Login} component={Login} options={{headerShown: false}} />
      <MainStack.Screen name={ScreenKey.Register} component={Register} options={{headerShown: false}} />
      <MainStack.Screen name={ScreenKey.VerifyPassword} component={VerifyPassword} options={{headerShown: false}} />
      <MainStack.Screen name={ScreenKey.ForgetPassword} component={ForgetPassword} options={{headerShown: false}} />
      <MainStack.Screen name={ScreenKey.MainTab} component={mainTabScreen} options={{headerShown: false}} />
    </MainStack.Navigator>
  )
}

export default function App() {
  return(
    <NavigationContainer>
      {mainStackScreen()}
    </NavigationContainer>
  );
}
