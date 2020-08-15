import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SearchAll from '../SearchAll/searchAll';
import { ScreenKey } from '../../../../global/constants';
import { SettingCommonContext } from '../../../../provider/settingCommon-provider';
import SearchByName from '../searchByName/searchByName';


const SearchTabResults = props => {
    const {language, theme} = useContext(SettingCommonContext);

    const SearchAuthorsScreen = () => {
        return(
            <SearchByName name={ScreenKey.Authors} navigation={props.navigation} />
        );
    }

    const SearchCoursesScreen = () => {
        return(
            <SearchByName name={ScreenKey.Courses} navigation={props.navigation} />
        );
    }

    const SearchAllScreen = () => {
        return(
            <SearchAll keyword={props.keyword} navigation={props.navigation} />
        );
    }

    const Tab = createMaterialTopTabNavigator();

    return(
        <Tab.Navigator
            tabBarOptions = {{
                activeTintColor: theme ? '#fff' : '#000',
                inactiveTintColor: theme ? '#fff' : 'gray',
                labelStyle: {
                    fontWeight: 'bold',
                    fontSize: 15,
                },
                style: {
                    backgroundColor: theme ? '#000' : '#EEEEEE',
                }
            }}
        >
            <Tab.Screen name={language ? ScreenKey.All : 'Tất cả'} component={SearchAllScreen} />
            <Tab.Screen name={language ? ScreenKey.Courses : 'Khoá học'} component={SearchCoursesScreen} />
            <Tab.Screen name={language ? ScreenKey.Authors : 'Tác giả'} component={SearchAuthorsScreen} />
        </Tab.Navigator>
    );
}

export default SearchTabResults;