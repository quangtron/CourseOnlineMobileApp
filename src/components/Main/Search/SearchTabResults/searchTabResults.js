import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SearchAll from '../SearchAll/searchAll';
import { ScreenKey } from '../../../../global/constants';


const SearchTabResults = props => {
    const SearchAllScreen = () => {
        return(
            <SearchAll keyword={props.keyword} navigation={props.navigation} />
        );
    }

    const Tab = createMaterialTopTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen name={ScreenKey.All} component={SearchAllScreen} />
        </Tab.Navigator>
    );
}

export default SearchTabResults;