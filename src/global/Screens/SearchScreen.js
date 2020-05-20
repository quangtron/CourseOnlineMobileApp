import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../../components/Main/Search/search';
import ScreenKey from '../../components/Common/ScreenKey';

const SearchStack = createStackNavigator();

function SearchScreen() {
  return(
    <SearchStack.Navigator mode="modal">
      <SearchStack.Screen
        name={ScreenKey.Search}
        component={Search}
        options={{headerShown: false}}
      />
    </SearchStack.Navigator>
  );
}

export default SearchScreen;