import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { AuthenticationContext } from "../../../../provider/authentication-provider";
import ModalRegisterCourse from "../../../Common/ModalRegisterCourse";
import { SettingCommonContext } from "../../../../provider/settingCommon-provider";
import ShareScreen from "../../../Others/Share/share";

const ButtonInformation = (props) => {
  const authenticationContext = useContext(AuthenticationContext);
  const {language} = useContext(SettingCommonContext);
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleToggleModal = (bool) => {
    authenticationContext.checkOwnCourse(
      props.data.id,
      authenticationContext.state.access_token
    );
    setModalVisible(bool);
  };

  const onHandleCancel = () => {
    setModalVisible(false);
  };

  const onHandleLike = () => {
    authenticationContext.likeCourse(props.data.id, authenticationContext.state.access_token);
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.boxBtn}>
        <ModalRegisterCourse
          info={props.data}
          visibleCheck={modalVisible}
          onHandleCloseModal={onHandleToggleModal}
          onHandleCancel={onHandleCancel}
        />
        <TouchableOpacity
          style={styles.btnCustom(1)}
          onPress={() => onHandleLike()}
        >
          <Text style={styles.textLayout(1)}>{authenticationContext.state.likeStatus ? (language ? 'Unlike' : 'Huỷ thích') : (language ? 'Like' : 'Yêu thích')}</Text>
          <Ionicons name="ios-heart" size={24} color="tomato" />
        </TouchableOpacity>

        {authenticationContext.state.checkOwnCourse.isUserOwnCourse ? (
          <View
            style={styles.btnCustom(2)}
          >
            <Text style={styles.textLayout(2)}>{language ? 'Enjoyed' : 'Đã tham gia'}</Text>
            <AntDesign name="pushpin" size={24} color="#2196F3" />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.btnCustom(2)}
            onPress={() => onHandleToggleModal(!modalVisible)}
          >
            <Text style={styles.textLayout(2)}>{language ? 'Enjoy' : 'Tham gia'}</Text>
            <AntDesign name="pushpin" size={24} color="#2196F3" />
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        style={styles.btnShare}
        onPress={() => ShareScreen(props.data.id)}
      >
        <Text style={styles.textShare}>{language ? 'Share' : 'Chia sẻ'}</Text>
        <Ionicons name="md-share" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: (x) => {
    return {
      fontSize: 17,
      color: x === 1 ? "tomato" : "#2196F3",
      marginRight: 10,
    };
  },
  btnCustom: (x) => {
    return {
      width: 150,
      height: 40,
      borderWidth: 1,
      borderColor: x === 1 ? "tomato" : "#2196F3",
      borderRadius: 25,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    };
  },
  boxBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnShare: {
    marginTop: 20,
    width: 150,
    height: 40,
    backgroundColor: '#00E676',
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
  },
  textShare: {
    fontSize: 18,
    color: '#fff',
    marginRight: 10,
  }
});

export default ButtonInformation;
