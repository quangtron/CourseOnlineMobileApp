import React, { useContext } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from 'moment';

import Styles from "../../../Common/Styles";
import { ScreenKey } from "../../../../global/constants";
import { SettingCommonContext } from "../../../../provider/settingCommon-provider";

const DownloadItem = (props) => {
  const {language, theme} = useContext(SettingCommonContext);
  const {
    title,
    imageUrl,
    price,
    soldNumber,
    formalityPoint,
    contentPoint,
    presentationPoint,
    instructorName,
    courseTitle,
    courseImage,
    courseSoldNumber,
    courseAveragePoint,
    coursePrice,
    latestLearnTime,
  } = props.item;

  const sumPoint = ((formalityPoint + contentPoint + presentationPoint) / 3).toFixed(1);

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

  const onPress = (item) => {
    props.navigation.navigate(ScreenKey.CourseDetail, { item: item });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={() => onPress(props.item)}>
      <Image source={{ uri: imageUrl || courseImage }} style={styles.image} />
      <View style={styles.text}>
        <Text style={Styles.text(16, theme ? "#fff" : "#000", "normal")}>
          {title || courseTitle}
        </Text>
        <Text style={[Styles.text(14, "#2196F3", "normal"), { marginTop: 10 }]}>
          {props.item["instructor.user.name"] || instructorName}
        </Text>
        {latestLearnTime ? (
          <View>
            <Text>{language ? 'Time payment:' : 'Thời gian thanh toán:'}</Text>
            <Text style={Styles.text(14, "#9E9E9E", "normal")}>{moment(latestLearnTime).format("DD/MM/YYYY, h:mm:ss")}</Text>
          </View>
        ) : (
          <View>
            <View style={styles.subInfo}>
              {renderStar(courseAveragePoint || sumPoint)}
              <Text style={Styles.text(14, "#9E9E9E", "normal")}>
                <Text style={Styles.text(14, "tomato", "normal")}>
                  {soldNumber || courseSoldNumber}
                </Text>{" "}
                {language ? 'students' : 'học viên'}
              </Text>
            </View>
            {price >= 0 || coursePrice >= 0 ? (
              price === 0 || coursePrice === 0 ? <Text style={{color: theme ? "#fff" : "#000"}}>{language ? 'Free' : 'Miễn phí'}</Text> : <Text style={Styles.text(14, "#616161", "normal")}>{price || coursePrice} VND</Text>
            ) : null}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 15,
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 100,
  },
  text: {
    marginLeft: 10,
    width: "55%",
    justifyContent: "space-between",
  },
  subInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default DownloadItem;
