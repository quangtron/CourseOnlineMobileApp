import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import BrowseScreen from './BrowseScreen';
import DownloadScreen from './DownloadScreen';
import SearchScreen from './SearchScreen';
import { ScreenKey } from '../constants';

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

export default mainTabScreen;