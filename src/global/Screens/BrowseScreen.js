import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Browse from '../../components/Main/Browse/browse';
import { ScreenKey } from '../constants';
import ListCourses from '../../components/Courses/ListCourses/listCourses';
import CoursesDetail from '../../components/CourseDetail/coursesDetail';
import ButtonSetting from '../../components/Common/ButtonSetting';
import Setting from '../../components/AccountManagement/Setting/setting';
import Profile from '../../components/AccountManagement/Profile/profile';
import Subscription from '../../components/Others/Subscription/subscription';
import AuthorDetail from '../../components/Main/Browse/AuthorDetail/authorDetail';
import { SettingCommonContext } from '../../provider/settingCommon-provider';

const BrowseStack = createStackNavigator();

function BrowseScreen(props) {
    const {language, setLanguage} = useContext(SettingCommonContext);

    return(
        <BrowseStack.Navigator
            initialRouteName={language ? ScreenKey.Browse : 'Nổi bật'}
            mode="modal"
            screenOptions={{headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22,
            }}}
        >
            <BrowseStack.Screen 
                name={language ? ScreenKey.Browse : 'Nổi bật'} 
                component={Browse}
                options={{
                    headerRight: () => <ButtonSetting navigation={props.navigation} />
                }}
            />
            <BrowseStack.Screen name={ScreenKey.ListCourses} component={ListCourses} />
            <BrowseStack.Screen
                name={ScreenKey.CourseDetail} 
                component={CoursesDetail} 
                options={{
                    title: 'Courses Detail',
                    headerShown: false,
                }}
            />
            <BrowseStack.Screen
                name={ScreenKey.Setting} 
                component={Setting} 
                options={{title: 'Setting', headerShown: false}} 
            />
            <BrowseStack.Screen
                name={ScreenKey.Profile} 
                component={Profile} 
                options={{title: 'Setting Account'}} 
            />
            <BrowseStack.Screen
                name={ScreenKey.Subscription} 
                component={Subscription} 
                options={{title: 'Subscription'}} 
            />
            <BrowseStack.Screen
                name={ScreenKey.AuthorDetail}
                component={AuthorDetail}
                options={{title: 'Author Detail'}}
            />
        </BrowseStack.Navigator>
    );
}

export default BrowseScreen;