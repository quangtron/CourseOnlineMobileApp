import React, { useContext, useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import Styles from "../../Common/Styles";
import { ScreenKey } from "../../../global/constants";
import { RegisterContext } from "../../../provider/register-provider";
import { VerifyEmailContext } from "../../../provider/verify-email-provider";

const VerifyPassword = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const registerContext = useContext(RegisterContext);
  const verifyEmailContext = useContext(VerifyEmailContext);

  useEffect(() => {
    console.log("useeffect");
    if (registerContext.state.isRegistered) {
      console.log("success");
      verifyEmailContext.verifyEmail(email);
    } else {
      console.log("fail");
    }
  }, [registerContext.state.isRegistered]);

  useEffect(() => {
    console.log("useeffect2");
    if (verifyEmailContext.state.isVerifyed) {
      console.log("success2");
      props.navigation.navigate(ScreenKey.Register, { email });
    } else {
      console.log("fail2");
    }
  }, [verifyEmailContext.state.isVerifyed]);

  const onPressRegister = () => {
    if(!name || !email || !password || !phoneNumber){
      setIsEmpty(true);
    } else if (password === confirmPassword) {
      registerContext.state.isRegistered = false;
      registerContext.state.message = null;
      registerContext.register(name, email, phoneNumber, password);
    }
  };

  const onPressBack = () => {
    registerContext.state.message = null;
    props.navigation.navigate(ScreenKey.Login);
  };

  const renderMessage = () => {
    if(isEmpty){
      return <Text style={styles.message}>Chưa điền đầy đủ thông tin</Text>
    } else if(registerContext.state.message){
      return <Text style={styles.message}>{registerContext.state.message}</Text>
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/bgLogin.jpg")}
        style={styles.bgImage}
      >
        <Text
          style={[
            Styles.text(30, "#F06292", "bold"),
            styles.txtShadow,
            { top: "-13%" },
          ]}
        >
          COURSE ONLINE
        </Text>
        <View style={styles.box}>
          <Image
            source={require("../../../../assets/user.png")}
            style={styles.userImg}
          />
          <Text
            style={[
              Styles.text(35, "#ffebee", "bold"),
              { marginTop: 60, marginBottom: 30 },
            ]}
          >
            Đăng ký
          </Text>
          {renderMessage()}
          <View>
            <TextInput
              style={styles.inputLayout}
              placeholder="Nhập họ tên"
              placeholderTextColor="#fff"
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputLayout}
              placeholder="Nhập email"
              placeholderTextColor="#fff"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputLayout}
              placeholder="Nhập mật khẩu"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputLayout}
              placeholder="Xác nhận mật khẩu"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputLayout}
              placeholder="Nhập số điện thoại"
              placeholderTextColor="#fff"
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[
                Styles.btnLayout(100, 40, "#ffebee"),
                { marginBottom: 30 },
              ]}
              onPress={onPressRegister}
            >
              <Text style={Styles.text(20, "#000", "normal")}>Đăng ký</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={Styles.text(14, "#FFF59D", "normal")}
                onPress={onPressBack}
              >
                Quay trở lại đăng nhập!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
  },
  buttons: {
    marginTop: 20,
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    alignItems: "center",
    width: "70%",
    height: "60%",

    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  userImg: {
    position: "absolute",
    top: -50,

    width: 100,
    height: 100,
  },
  inputLayout: {
    width: 200,
    padding: 5,
    marginBottom: 20,

    fontSize: 16,
    color: "#fff",
    backgroundColor: "transparent",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  txtShadow: {
    textShadowOffset: {
      height: 2,
      width: 2,
    },
    textShadowColor: "#F06292",
    textShadowRadius: 5,
  },
  message: {
    marginBottom: 10,
    color: '#d32f2f',
  }
});

export default VerifyPassword;
