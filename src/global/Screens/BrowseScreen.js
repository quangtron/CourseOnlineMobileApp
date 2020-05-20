import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Browse from '../../components/Main/Browse/browse';
import ScreenKey from '../../components/Common/ScreenKey';

const BrowseStack = createStackNavigator();

function BrowseScreen() {
  return(
    <BrowseStack.Navigator>
      <BrowseStack.Screen name={ScreenKey.Browse} component={Browse} />
    </BrowseStack.Navigator>
  );
}

export default BrowseScreen;