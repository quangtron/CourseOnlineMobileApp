import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import mainStackScreen from './src/global/Screens/MainStackScreen';
import { AuthenticationProvider } from './src/provider/authentication-provider';
import { MainProvider } from './src/provider/main-provider';
import { PopularSkillsProvider } from './src/provider/popular-skills-provider';
import { AuthorsProvider } from './src/provider/authors-provider';

export default function App() {
    return(
        <AuthenticationProvider>
            <MainProvider>
                <PopularSkillsProvider>
                    <AuthorsProvider>
                        <NavigationContainer>
                            {mainStackScreen()}
                        </NavigationContainer>
                    </AuthorsProvider>
                </PopularSkillsProvider>
            </MainProvider>
        </AuthenticationProvider>
    );
}
