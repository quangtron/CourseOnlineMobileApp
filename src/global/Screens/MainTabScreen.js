import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import BrowseScreen from './BrowseScreen';
import DownloadScreen from './DownloadScreen';
import SearchScreen from './SearchScreen';
import { ScreenKey } from '../constants';
import { SettingCommonContext } from '../../provider/settingCommon-provider';

const Tab = createBottomTabNavigator();

const mainTabScreen = _ => {
  const {language, setLanguage} = useContext(SettingCommonContext);

  return(
    <Tab.Navigator
        screenOptions = {({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if(route.name === ScreenKey.Home || route.name === 'Trang chủ'){
              iconName = 'ios-home';
            }
            else if(route.name === ScreenKey.Browse || route.name === 'Nổi bật') {
              iconName = 'md-browsers';
            }
            else if(route.name === ScreenKey.Download || route.name === 'Tải xuống') {
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
        initialRouteName={language ? ScreenKey.Home : 'Trang chủ'}
      >
        <Tab.Screen name={language ? ScreenKey.Home : 'Trang chủ'} component={HomeScreen} />
        <Tab.Screen name={language ? ScreenKey.Browse : 'Nổi bật'} component={BrowseScreen} />
        <Tab.Screen name={language ? ScreenKey.Download : 'Tải xuống'} component={DownloadScreen} />
        <Tab.Screen name={language ? ScreenKey.Search : 'Tìm kiếm'} component={SearchScreen} />
      </Tab.Navigator>
  );
}

export default mainTabScreen;