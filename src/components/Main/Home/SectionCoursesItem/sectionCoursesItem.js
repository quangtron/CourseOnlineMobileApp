import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import moment from 'moment';

import Styles from "../../../Common/Styles";
import { ScreenKey } from "../../../../global/constants";

const SectionCoursesItem = (props) => {
  const { title, imageUrl, price, courseImage, courseTitle, instructorName, latestLearnTime, total } = props.item;

  const onPressItem = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, { item });
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onPressItem(props.item)}
    >
      <Image source={{ uri: courseImage ? courseImage : imageUrl }} style={styles.image} />
      <View style={styles.course}>
        <Text style={{marginBottom: 20}}>{courseTitle ? courseTitle : title}</Text>
        <View >
          <Text style={Styles.text(13, "#616161", "normal")}>
            {instructorName ? instructorName : props.item["instructor.user.name"]}
          </Text>
          {price >= 0 ? <Text style={Styles.text(13, "#616161", "normal")}>{price} đ</Text> : null}
          {latestLearnTime ? 
          <View>
            <Text>Thời gian thanh toán:</Text>
            <Text style={Styles.text(13, "#616161", "normal")}>{moment(latestLearnTime).format('DD/MM/YYYY, h:mm:ss')}</Text>
            <Text>{total} bài học</Text>
          </View> : null
          }
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 5,
    width: 200,
    height: null,
    backgroundColor: "#EEEEEE",
  },
  image: {
    width: 200,
    height: 100,
  },
  course: {
    margin: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
});

export default SectionCoursesItem;
