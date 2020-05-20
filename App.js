import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Login from './src/components/Authentication/Login/login';
import ScreenKey from './src/components/Common/ScreenKey';
import HomeScreen from './src/global/Screens/HomeScreen';
import BrowseScreen from './src/global/Screens/BrowseScreen';
import DownloadScreen from './src/global/Screens/DownloadScreen';
import SearchScreen from './src/global/Screens/SearchScreen';
import Splashscreen from './src/components/Others/Splashscreen/splashscreen';

const Tab = createBottomTabNavigator();

const mainTabScreen = _ => {
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

// const MainStack = createStackNavigator();

// const mainStackScreen = _ => {
//   return(
//     <MainStack.Navigator>
//       <MainStack.Screen
//         name={ScreenKey.Splashscreen} 
//         component={Splashscreen} 
//         options={{headerShown: false}}
//         />
//       <MainStack.Screen name={ScreenKey.Login} component={Login} />
//       {/* <MainStack.Screen name={ScreenKey.MainTab} component={mainTabScreen} /> */}
//     </MainStack.Navigator>
//   )
// }

export default function App() {
  return(
    <NavigationContainer>
      {mainTabScreen()}
    </NavigationContainer>
  );
}
