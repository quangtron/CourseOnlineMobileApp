import React, { useContext } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";

import Styles from "../../../Common/Styles";
import { ScreenKey } from "../../../../global/constants";
import { SettingCommonContext } from "../../../../provider/settingCommon-provider";

const SectionCoursesItem = (props) => {
  const {
    title,
    imageUrl,
    price,
    courseImage,
    courseTitle,
    courseSoldNumber,
    courseAveragePoint,
    coursePrice,
    instructorName,
    latestLearnTime,
    total,
    formalityPoint,
    contentPoint,
    presentationPoint,
    soldNumber,
  } = props.item;

  const {language, theme} = useContext(SettingCommonContext);

  const onPressItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, { item });
  };

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

  const sumPoint = ((formalityPoint + contentPoint + presentationPoint)/3).toFixed(1);

  return (
    <TouchableOpacity
      style={styles.item(theme)}
      onPress={() => onPressItem(props.item)}
    >
      <Image
        source={{ uri: courseImage || imageUrl }}
        style={styles.image}
      />
      <View style={styles.course}>
        <Text style={{ marginBottom: 20, color: theme ? '#fff' : '#000' }}>
          {courseTitle || title}
        </Text>
        <View>
          <Text style={Styles.text(14, "#2196F3", "normal")}>
            {instructorName || props.item["instructor.user.name"]}
          </Text>
          {latestLearnTime ? null :
          <View style={styles.flexDirectionRow}>
            {renderStar(courseAveragePoint || sumPoint)}
            <Text style={Styles.text(14, theme ? '#fff' : '#000', "normal")}>
              <Text style={{color: 'tomato'}}>{soldNumber || courseSoldNumber}</Text>{language ? " students" : " học viên"}
            </Text>
          </View>}
          {price >= 0 || coursePrice >= 0 ? (
            price === 0 || coursePrice === 0 ? <Text style={{color: theme ? '#fff' : '#000'}}>{language ? "Free" : "Miễn phí"}</Text> : <Text style={Styles.text(14, "#616161", "normal")}>{price || coursePrice} VND</Text>
          ) : null}
          {latestLearnTime ? (
            <View style={{marginTop: 10}}>
              <Text style={{color: theme ? '#fff' : '#000'}}>{language ? "Time payment:" : "Thời gian thanh toán:"}</Text>
              <Text style={Styles.text(14, theme ? '#9E9E9E' : '#000', "normal")}>
                {moment(latestLearnTime).format("DD/MM/YYYY, h:mm:ss")}
              </Text>
              <Text style={{marginTop: 10, color: theme ? '#fff' : '#000'}}>{total}{language ? " courses" : " bài học"}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: (bool) => {
    return {
      margin: 5,
      width: 200,
      height: null,
      backgroundColor: bool ? '#000' : '#fff',
    }
  },
  image: {
    width: 200,
    height: 100,
  },
  course: {
    margin: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flexDirectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
  }
});

export default SectionCoursesItem;
