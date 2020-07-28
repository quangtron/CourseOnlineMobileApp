import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { AuthenticationContext } from "../../../../provider/authentication-provider";
import ModalRegisterCourse from "../../../Common/ModalRegisterCourse";

const ButtonInformation = (props) => {
  const authenticationContext = useContext(AuthenticationContext);
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
        <Text style={styles.textLayout(1)}>{authenticationContext.state.likeStatus ? 'Huỷ thích' : 'Yêu thích'}</Text>
        <Ionicons name="ios-heart" size={24} color="tomato" />
      </TouchableOpacity>
      {authenticationContext.state.checkOwnCourse.isUserOwnCourse ? (
        <View
          style={styles.btnCustom(2)}
        >
          <Text style={styles.textLayout(2)}>Đã tham gia</Text>
          <AntDesign name="pushpin" size={24} color="#2196F3" />
        </View>
      ) : (
        <TouchableOpacity
          style={styles.btnCustom(2)}
          onPress={() => onHandleToggleModal(!modalVisible)}
        >
          <Text style={styles.textLayout(2)}>Tham gia</Text>
          <AntDesign name="pushpin" size={24} color="#2196F3" />
        </TouchableOpacity>
      )}
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default ButtonInformation;
