import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Download from '../../components/Main/Download/download';
import { ScreenKey } from '../constants';
import Setting from '../../components/AccountManagement/Setting/setting';
import ButtonSetting from '../../components/Common/ButtonSetting';
import CoursesDetail from '../../components/CourseDetail/coursesDetail';

const DownloadStack = createStackNavigator();

function DownloadScreen(props) {
    return(
        <DownloadStack.Navigator mode="modal">
            <DownloadStack.Screen
                name={ScreenKey.Download}
                component={Download}
                options={{
                    headerRight: () => <ButtonSetting navigation={props.navigation} />
                }}
            />
            <DownloadStack.Screen
                name={ScreenKey.Setting} 
                component={Setting} 
                options={{title: 'Setting', headerShown: false}} 
            />
            <DownloadStack.Screen
                name={ScreenKey.CourseDetail} 
                component={CoursesDetail} 
                options={{
                    title: 'Courses Detail',
                    headerShown: false,
                }}
            />
        </DownloadStack.Navigator>
    );
}

export default DownloadScreen;