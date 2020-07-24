import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import mainStackScreen from "./src/global/Screens/MainStackScreen";
import { AuthenticationProvider } from "./src/provider/authentication-provider";
import { MainProvider } from "./src/provider/main-provider";
import { PopularSkillsProvider } from "./src/provider/popular-skills-provider";
import { AuthorsProvider } from "./src/provider/authors-provider";
import { DownloadsProvider } from "./src/provider/downloads-provider";
import { BookmarksProvider } from "./src/provider/bookmarks-provider";
import { SearchProvider } from "./src/provider/search-provider";
import { VerifyEmailProvider } from "./src/provider/verify-email-provider";
import { RegisterProvider } from "./src/provider/register-provider";
import { CoursesProvider } from "./src/provider/courses-provider";
import { PaymentProvider } from "./src/provider/payment-provider";

export default function App() {
  return (
    <RegisterProvider>
      <VerifyEmailProvider>
        <AuthenticationProvider>
          <CoursesProvider>
            <PaymentProvider>
              {/* <MainProvider> */}
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
              {/* </MainProvider> */}
            </PaymentProvider>
          </CoursesProvider>
        </AuthenticationProvider>
      </VerifyEmailProvider>
    </RegisterProvider>
  );
}
