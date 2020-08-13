import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import mainStackScreen from "./src/global/Screens/MainStackScreen";
import { AuthenticationProvider } from "./src/provider/authentication-provider";
import { AuthorsProvider } from "./src/provider/authors-provider";
import { SearchProvider } from "./src/provider/search-provider";
import { VerifyEmailProvider } from "./src/provider/verify-email-provider";
import { RegisterProvider } from "./src/provider/register-provider";
import { CoursesProvider } from "./src/provider/courses-provider";
import { PaymentProvider } from "./src/provider/payment-provider";
import { CategoriesProvider } from "./src/provider/categories-provider";
import { SettingCommonProvider } from "./src/provider/settingCommon-provider";

export default function App() {
  return (
    <SettingCommonProvider>
      <RegisterProvider>
        <VerifyEmailProvider>
          <AuthenticationProvider>
            <CoursesProvider>
              <CategoriesProvider>
                <PaymentProvider>
                  <AuthorsProvider>
                    <NavigationContainer>
                      {mainStackScreen()}
                    </NavigationContainer>
                  </AuthorsProvider>
                </PaymentProvider>
              </CategoriesProvider>
            </CoursesProvider>
          </AuthenticationProvider>
        </VerifyEmailProvider>
      </RegisterProvider>
    </SettingCommonProvider>
  );
}
