import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import moment from "moment";
import { Ionicons } from '@expo/vector-icons';

import Styles from "../../../Common/Styles";

const HeaderInformation = (props) => {
  const { name, avatar, intro, totalCourse, averagePoint } = props.authorInfo;
  const { title, subtitle, soldNumber, updatedAt } = props.info;
  // console.log(props.info, props.authorInfo);

  return (
    <View>
      <Text style={Styles.text(22, "#000", "bold")}>{title}</Text>
      <View style={styles.subInfo}>
        <Text>{subtitle}</Text>
        <Text style={{ marginTop: 15 }}>
          {`${soldNumber} học viên - Cập nhật mới nhất: ${moment(updatedAt).format("DD/MM/YYYY")}`}
        </Text>
      </View>
      <TouchableOpacity
        style={[Styles.btnLayout(160, 40, "#FFFDE7"), styles.author]}
      >
        <View style={styles.images}>
          <Image style={styles.image} source={{ uri: avatar }} />
          <Image
            style={styles.imageCheck}
            source={require("../../../../../assets/iconCheck.png")}
          />
        </View>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
      <View style={styles.authorInfo}>
        {intro ? <Text style={styles.authorIntro}>{intro}</Text> : <Text style={styles.authorIntro}>(Chưa có bài tự giới thiệu.)</Text>}
        <View style={styles.authorDetail}>
          <Text>
            <Ionicons name="md-people" size={15} color="tomato" />{`  ${props.authorInfo.soldNumber} Học viên`}
          </Text>
          <Text>
            <Ionicons name="ios-play-circle" size={15} color="tomato" />{`  ${totalCourse} Khoá học`}
          </Text>
          <Text>
            <Ionicons name="ios-star" size={15} color="tomato" />{`  ${averagePoint.toFixed(1)} Điểm`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  author: {
    marginRight: 10,
    marginTop: 20,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1000,
  },
  image: {
    width: 40,
    height: 40,
    // left: -10,
    borderRadius: 50,
  },
  images: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageCheck: {
    width: 15,
    height: 15,
    left: -10,
  },
  text: {
    paddingRight: 15,
    left: -10,
  },
  subInfo: {
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  authorInfo: {
    borderRadius: 10,
    marginTop: -25,
    marginLeft: 20,
    padding: 10,
    zIndex: -1,
    backgroundColor: '#E0E0E0',
  },
  authorDetail: {
    marginLeft: 10,
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authorIntro: {
    fontStyle: 'italic',
    color: '#424242',
    marginTop: 15,
    marginBottom: 10,
  }
});

export default HeaderInformation;
