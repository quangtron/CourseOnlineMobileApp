import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Download from '../../components/Main/Download/download';
import { ScreenKey } from '../constants';
import Setting from '../../components/AccountManagement/Setting/setting';
import ButtonSetting from '../../components/Common/ButtonSetting';
import CoursesDetail from '../../components/CourseDetail/coursesDetail';
import Profile from '../../components/AccountManagement/Profile/profile';
import Subscription from '../../components/Others/Subscription/subscription';
import { SettingCommonContext } from '../../provider/settingCommon-provider';

const DownloadStack = createStackNavigator();

function DownloadScreen(props) {
    const {language, setLanguage} = useContext(SettingCommonContext);

    return(
        <DownloadStack.Navigator
            initialRouteName={language ? ScreenKey.Download : 'Tải xuống'}
            mode="modal"
            screenOptions={{headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22,
            }}}
        >
            <DownloadStack.Screen
                name={language ? ScreenKey.Download : 'Tải xuống'}
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
            <DownloadStack.Screen
                name={ScreenKey.Profile} 
                component={Profile} 
                options={{title: 'Setting Account'}} 
            />
            <DownloadStack.Screen
                name={ScreenKey.Subscription} 
                component={Subscription} 
                options={{title: 'Subscription'}} 
            />
        </DownloadStack.Navigator>
    );
}

export default DownloadScreen;