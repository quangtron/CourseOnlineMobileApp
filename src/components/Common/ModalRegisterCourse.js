import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  Image,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  

import { PaymentContext } from "../../provider/payment-provider";
import { AuthenticationContext } from "../../provider/authentication-provider";
import Styles from "./Styles";

const ModalRegisterCourse = (props) => {
  const { info } = props;
  const paymentContext = useContext(PaymentContext);
  const authenticationContext = useContext(AuthenticationContext);

  const onHandleCloseModal = async () => {
    await paymentContext.getFreeCourse(
      info.id,
      authenticationContext.state.access_token
    );
    props.onHandleCloseModal(false);
  };

  const onHandleCancel = () => {
    props.onHandleCancel();
  };

  return (
    <Modal
      animationType="slide"
      visible={props.visibleCheck}
      presentationStyle="formSheet"
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.modalStyle}>
        <Text style={styles.textHead}>- Tham gia khoá học -</Text>
        <View style={styles.box}>
          <Text style={styles.textTitle}>Thông tin khoá học</Text>
          <View style={styles.infoCourse}>
            <Image source={{ uri: info.imageUrl }} style={styles.imgStyle} />
            <View style={styles.textBox}>
              <Text style={{ fontSize: 18 }}>{info.title}</Text>
              <View>
                <Text style={styles.textStyle}>Giảng viên:</Text>
                <Text style={Styles.text(16, "#000", "normal")}>
                  {info.instructor.name}
                </Text>
              </View>
              <Text style={Styles.text(16, "tomato", "normal")}>
                {info.price > 0 ? `${info.price} VND` : "Miễn phí"}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.textTitle}>Thông tin khách hàng</Text>
          <View style={styles.infoItem}>
            <FontAwesome name="user-o" size={16} color="tomato" />
            <Text style={Styles.text(16, "#000", "normal")}>  {authenticationContext.state.user.name}</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialCommunityIcons name="email-outline" size={16} color="tomato" />
            <Text style={Styles.text(16, "#000", "normal")}>  {authenticationContext.state.user.email}</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialCommunityIcons name="cellphone-iphone" size={16} color="tomato" />
            <Text style={Styles.text(16, "#000", "normal")}>  {authenticationContext.state.user.phone}</Text>
          </View>
        </View>
        <Text style={[styles.textStyle, {color: '#03A9F4'}]}>*Khóa học sẽ được kích hoạt ngay khi bạn đăng ký thành công.</Text>
        <View style={styles.btnBox}>
          <TouchableOpacity
            onPress={() => {
              onHandleCloseModal();
            }}
            style={styles.btnStyle(2)}
          >
            <Text style={Styles.text(16, "#fff", "normal")}>Đăng ký</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onHandleCancel();
            }}
            style={styles.btnStyle(1)}
          >
            <Text style={Styles.text(16, "#fff", "normal")}>Huỷ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    padding: 10,
    position: "relative",
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textHead: {
    marginTop: 20,
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
    color: "#03A9F4",
    textTransform: "uppercase",
  },
  imgStyle: {
    width: "45%",
    height: 150,
  },
  infoCourse: {
    width: "100%",
    flexDirection: "row",
  },
  textStyle: {
    fontStyle: "italic",
    color: "#757575",
    fontSize: 16,
  },
  textTitle: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  textBox: {
    width: "50%",
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "space-around",
  },
  box: {
    borderWidth: 1,
    borderColor: '#03A9F4',
    padding: 5,
    borderRadius: 10,
    marginBottom: 30,
    width: '100%'
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  btnStyle: (x) => {
    return {
      width: 150,
      height: 40,
      borderWidth: 1,
      borderColor: x === 1 ? "tomato" : "#2196F3",
      backgroundColor: x === 1 ? "tomato" : "#2196F3",
      borderRadius: 25,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    }
  },
  btnBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100,
  }
});

export default ModalRegisterCourse;
