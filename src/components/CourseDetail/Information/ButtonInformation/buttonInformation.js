import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { AuthenticationContext } from "../../../../provider/authentication-provider";
import ModalRegisterCourse from "../../../Common/ModalRegisterCourse";

const ButtonInformation = (props) => {
  const authenticationContext = useContext(AuthenticationContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [checkOwnCourse, setCheckOwnCourse] = useState(false);

  // useEffect(() => {
  //   if (authenticationContext.state.checkOwnCourse.isUserOwnCourse) {
  //     setCheckOwnCourse(true);
  //   }
  // }, [authenticationContext.state.checkOwnCourse.isUserOwnCourse]);

  const onHandleToggleModal = (bool) => {
    authenticationContext.checkOwnCourse(
      props.data.id,
      authenticationContext.state.access_token
    );
    setModalVisible(bool);
    // if(name === 'Download'){
    //     const listDownloads = downloads;
    //     listDownloads.push(data);
    //     setDownloads(listDownloads);
    // } else if(name === 'Bookmark'){
    //     let listBookmarks = bookmarks;
    //     if(!checked){
    //         listBookmarks.push(props.data);
    //         setBookmarks(listBookmarks);
    //         props.onToggleChange(!checked);
    //         Alert.alert('Insert Successfully!');
    //     } else {
    //         listBookmarks = removeItemFromBookmarks(props.data.title, bookmarks);
    //         setBookmarks(listBookmarks);
    //         props.onToggleChange(!checked);
    //         Alert.alert('Remove Successfully!');
    //     }
    // }
  };

  const onHandleCancel = () => {
    setModalVisible(false);
  };

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
        // onPress={() => onHandlePress()}
      >
        <Text style={styles.textLayout(1)}>Yêu thích</Text>
        <Ionicons name="ios-heart" size={24} color="tomato" />
      </TouchableOpacity>
      {authenticationContext.state.checkOwnCourse.isUserOwnCourse ? (
        <View
          style={styles.btnCustom(2)}
          // onPress={() => onHandlePress()}
        >
          <Text style={styles.textLayout(2)}>Đã tham gia</Text>
          <AntDesign name="pushpin" size={24} color="#2196F3" />
        </View>
      ) : (
        <TouchableOpacity
          style={styles.btnCustom(2)}
          onPress={() => onHandleToggleModal(true)}
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
