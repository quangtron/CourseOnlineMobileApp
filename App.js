import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import mainStackScreen from './src/global/Screens/MainStackScreen';
import { AuthenticationProvider } from './src/provider/authentication-provider';
import { MainProvider } from './src/provider/main-provider';

export default function App() {
    return(
        <AuthenticationProvider>
            <MainProvider>
                    <NavigationContainer>
                        {mainStackScreen()}
                    </NavigationContainer>
            </MainProvider>
        </AuthenticationProvider>
    );
}
