import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import mainStackScreen from './src/global/Screens/MainStackScreen';
import { AuthenticationProvider } from './src/provider/authentication-provider';
import { MainProvider } from './src/provider/main-provider';
import { PopularSkillsProvider } from './src/provider/popular-skills-provider';
import { AuthorsProvider } from './src/provider/authors-provider';
import { DownloadsProvider } from './src/provider/downloads-provider';
import { BookmarksProvider } from './src/provider/bookmarks-provider';
import { SearchProvider } from './src/provider/search-provider';

export default function App() {
    return(
        <AuthenticationProvider>
            <MainProvider>
                <PopularSkillsProvider>
                    <AuthorsProvider>
                        <DownloadsProvider>
                            <BookmarksProvider>
                                <SearchProvider>
                                    <NavigationContainer>
                                        {mainStackScreen()}
                                    </NavigationContainer>
                                </SearchProvider>
                            </BookmarksProvider>
                        </DownloadsProvider>
                    </AuthorsProvider>
                </PopularSkillsProvider>
            </MainProvider>
        </AuthenticationProvider>
    );
}
