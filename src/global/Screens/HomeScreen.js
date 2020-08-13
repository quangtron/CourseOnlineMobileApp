import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../components/Main/Home/home';
import ListCourses from '../../components/Courses/ListCourses/listCourses';
import CoursesDetail from '../../components/CourseDetail/coursesDetail';
import { ScreenKey } from '../constants';
import Setting from '../../components/AccountManagement/Setting/setting';
import ButtonSetting from '../../components/Common/ButtonSetting';
import Profile from '../../components/AccountManagement/Profile/profile';
import Subscription from '../../components/Others/Subscription/subscription';
import AuthorDetail from '../../components/Main/Browse/AuthorDetail/authorDetail';
import { SettingCommonContext } from '../../provider/settingCommon-provider';

const HomeStack = createStackNavigator();

function HomeScreen(props) {
    const {language, theme} = useContext(SettingCommonContext);

    return(
        <HomeStack.Navigator
            initialRouteName={language ? ScreenKey.Home : 'Trang chủ'}
            mode="modal"
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 22,
                    color: theme ? '#fff' : '#000'
                },
                headerStyle: {
                    backgroundColor: theme ? '#000' : '#fff',
                }
            }}
        >
            <HomeStack.Screen
                name={language ? ScreenKey.Home : 'Trang chủ'} 
                component={Home} 
                options={{
                    headerRight: () => <ButtonSetting navigation={props.navigation} />
                }}
            />
            <HomeStack.Screen 
                name={ScreenKey.ListCourses} 
                component={ListCourses} 
                options={{title: 'List Courses'}} 
            />
            <HomeStack.Screen
                name={ScreenKey.CourseDetail} 
                component={CoursesDetail} 
                options={{
                    title: '',
                    headerShown: false,
                }}
            />
            <HomeStack.Screen
                name={ScreenKey.Setting} 
                component={Setting} 
                options={{title: language ? 'Setting' : 'Cài đặt', headerShown: false}} 
            />
            <HomeStack.Screen
                name={ScreenKey.Profile} 
                component={Profile} 
                options={{title: language ? 'Profile' : 'Thông tin tài khoản'}} 
            />
            <HomeStack.Screen
                name={ScreenKey.Subscription} 
                component={Subscription} 
                options={{title: 'Subscription'}} 
            />
            <HomeStack.Screen
                name={ScreenKey.AuthorDetail}
                component={AuthorDetail}
                options={{title: 'Chi tiết'}}
            />
        </HomeStack.Navigator>
    );
}

export default HomeScreen;