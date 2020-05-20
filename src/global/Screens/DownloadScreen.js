import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Download from '../../components/Main/Download/download';
import ScreenKey from '../../components/Common/ScreenKey';

const DownloadStack = createStackNavigator();

function DownloadScreen() {
  return(
    <DownloadStack.Navigator>
      <DownloadStack.Screen name={ScreenKey.Download} component={Download} />
    </DownloadStack.Navigator>
  );
}

export default DownloadScreen;