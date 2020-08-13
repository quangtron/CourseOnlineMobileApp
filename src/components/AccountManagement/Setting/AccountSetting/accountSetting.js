import React, { useContext } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import Styles from "../../../Common/Styles";
import { ScreenKey } from "../../../../global/constants";
import { AuthenticationContext } from "../../../../provider/authentication-provider";
import { SettingCommonContext } from "../../../../provider/settingCommon-provider";

const AccountSetting = (props) => {
  const authenticationContext = useContext(AuthenticationContext);
  const {language, theme} = useContext(SettingCommonContext);

  const onPressAccount = (_) => {
    props.navigation.navigate(ScreenKey.Profile);
  };

  const onPressSub = (_) => {
    props.navigation.navigate(ScreenKey.Subscription);
  };

  return (
    <View style={styles.accountSetting}>
      <TouchableOpacity style={styles.account} onPress={onPressAccount}>
        <Image
          style={styles.image}
          source={{uri: authenticationContext.state.user.avatar}}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={Styles.text(18, theme ? '#fff' : '#000', "normal")}>
            {authenticationContext.state.user.name}
          </Text>
          <Text style={Styles.text(16, "#9E9E9E", "normal")}>
            {authenticationContext.state.user.email}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressAccount}>
        <Text style={Styles.text(18, theme ? '#fff' : '#000', "normal")}>{language ? 'Setting profile' : 'Quản lý tài khoản'}</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={onPressSub}>
        <Text style={Styles.text(18, "#000", "normal")}>Subscription</Text>
        <Text style={Styles.text(14, "#9E9E9E", "normal")}>
          Individual (Expires: may 31, 2020)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={Styles.text(18, "#000", "normal")}>
          Communication Preferences
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  accountSetting: {
    marginTop: 50,
    marginBottom: 10,
  },
  account: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  button: {
    margin: 10,
  },
});

export default AccountSetting;
