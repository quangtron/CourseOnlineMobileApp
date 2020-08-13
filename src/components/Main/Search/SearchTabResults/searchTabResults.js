import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SearchAll from '../SearchAll/searchAll';
import { ScreenKey } from '../../../../global/constants';
import { SettingCommonContext } from '../../../../provider/settingCommon-provider';


const SearchTabResults = props => {
    const {language, theme} = useContext(SettingCommonContext);

    const SearchAllScreen = () => {
        return(
            <SearchAll keyword={props.keyword} navigation={props.navigation} />
        );
    }

    const Tab = createMaterialTopTabNavigator();

    return(
        <Tab.Navigator
            tabBarOptions = {{
                activeTintColor: '#fff',
                inactiveTintColor: theme ? '#fff' : 'gray',
                labelStyle: {
                    fontWeight: 'bold',
                    fontSize: 15,
                },
                style: {
                    backgroundColor: theme ? '#000' : '#fff',
                }
            }}
        >
            <Tab.Screen name={language ? 'Result' : ScreenKey.All} component={SearchAllScreen} />
        </Tab.Navigator>
    );
}

export default SearchTabResults;