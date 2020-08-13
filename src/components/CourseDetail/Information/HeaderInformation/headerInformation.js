import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";

import Styles from "../../../Common/Styles";
import { ScreenKey } from "../../../../global/constants";
import { SettingCommonContext } from "../../../../provider/settingCommon-provider";

const HeaderInformation = (props) => {
  const {language, theme} = useContext(SettingCommonContext);
  const { name, avatar, intro, totalCourse, averagePoint, id } = props.authorInfo;
  const {
    title,
    subtitle,
    soldNumber,
    updatedAt,
    formalityPoint,
    contentPoint,
    presentationPoint,
    ratedNumber,
  } = props.info;
  const sumPoint = ((formalityPoint + contentPoint + presentationPoint)/3).toFixed(1);
  // console.log(props.info);

  const renderStar = (point) => {
    return (
      <View style={{flexDirection: 'row'}}>
        { point - 1 >= 0 ? <Ionicons name="md-star" size={18} color="tomato" /> : <Ionicons name="ios-star-outline" size={18} color="tomato" />}
        { point - 2 >= 0 ? <Ionicons name="md-star" size={18} color="tomato" /> : <Ionicons name="ios-star-outline" size={18} color="tomato" />}
        { point - 3 >= 0 ? <Ionicons name="md-star" size={18} color="tomato" /> : <Ionicons name="ios-star-outline" size={18} color="tomato" />}
        { point - 4 >= 0 ? <Ionicons name="md-star" size={18} color="tomato" /> : <Ionicons name="ios-star-outline" size={18} color="tomato" />}
        { point - 5 >= 0 ? <Ionicons name="md-star" size={18} color="tomato" /> : <Ionicons name="ios-star-outline" size={18} color="tomato" />}
      </View>
    )
  }

  const onPressAuthor = (id) => {
    props.navigation.navigate(ScreenKey.AuthorDetail, {id: id});
  }

  return (
    <View>
      <Text style={Styles.text(22, theme ? "#fff" : "#000", "bold")}>{title}</Text>
      <View style={styles.subInfo}>
        <Text>{subtitle}</Text>
        <Text style={{ marginTop: 15 }}>
          {soldNumber} {language ? 'students - update:' : 'học viên - Cập nhật mới nhất:'} {moment(
            updatedAt
          ).format("DD/MM/YYYY")}
        </Text>
        <View style={styles.vote}>
          {renderStar(sumPoint)}
          <Text> {sumPoint} ({ratedNumber} {language ? 'rate' : 'bình chọn'})</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={[Styles.btnLayout(null, 40, "#FFFDE7"), styles.author]}
          onPress={() => onPressAuthor(id)}
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
        <View />
      </View>
      <View style={styles.authorInfo}>
        {intro ? (
          <Text style={styles.authorIntro}>{intro}</Text>
        ) : (
          <Text style={styles.authorIntro}>{language ? '(No self-introductions.)' : '(Chưa có bài tự giới thiệu.)'}</Text>
        )}
        <View style={styles.authorDetail}>
          <Text>
            <Ionicons name="md-people" size={15} color="tomato" />
            {'  '}{props.authorInfo.soldNumber} {language ? 'Students' : 'Học viên'}
          </Text>
          <Text>
            <Ionicons name="ios-play-circle" size={15} color="tomato" />
            {'  '}{totalCourse} {language ? 'Courses' : 'Khoá học'}
          </Text>
          <Text>
            <Ionicons name="ios-star" size={15} color="tomato" />
            {'  '}{averagePoint.toFixed(1)} {language ? 'Point' : 'Điểm'}
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
    justifyContent: "flex-start",
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
    width: null,
    color: '#1565C0',
    fontWeight: 'bold',
  },
  subInfo: {
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  authorInfo: {
    borderRadius: 10,
    marginTop: -25,
    marginLeft: 20,
    padding: 10,
    zIndex: -1,
    backgroundColor: "#E0E0E0",
  },
  authorDetail: {
    marginLeft: 10,
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  authorIntro: {
    fontStyle: "italic",
    color: "#424242",
    marginTop: 15,
    marginBottom: 10,
  },
  vote: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  }
});

export default HeaderInformation;
