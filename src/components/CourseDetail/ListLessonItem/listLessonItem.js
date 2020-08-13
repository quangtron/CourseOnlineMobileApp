import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import Styles from "../../Common/Styles";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { CoursesContext } from "../../../provider/courses-provider";

const ListLessonItem = (props) => {
  const [check, setCheck] = useState(false);
  const [checkOwnCourse, setCheckOwnCourse] = useState(false);
  const authenticationContext = useContext(AuthenticationContext);
  const coursesContext = useContext(CoursesContext);

  useEffect(() => {
    if (props.videoLesson === props.data.videoUrl) {
      setCheck(true);
    }
  }, []);

  useEffect(() => {
    if (authenticationContext.state.isChecked) {
      setCheckOwnCourse(authenticationContext.state.checkOwnCourse.isUserOwnCourse);
    }
  }, [authenticationContext.state.isChecked]);

  const onCheck = (_) => {
    setCheck(true);
    props.onHandleSwitchVideo(props.data.videoUrl);
    coursesContext.getLesson(authenticationContext.state.access_token, props.data.id);
  };

  return (
    <TouchableOpacity onPress={(_) => onCheck()} disabled={!checkOwnCourse} style={styles.section}>
      <View style={styles.lessonBox}>
        {check ? (
          <Image
            source={require("../../../../assets/iconCheck.png")}
            style={styles.image}
          />
        ) : (
          <View style={styles.checkBox} />
        )}
        <Text style={Styles.text(15, check ? "tomato" : "#000", "normal")}>
          {props.data.name}
        </Text>
      </View>
      <Text style={Styles.text(15, "#9E9E9E", "normal")}>
        {props.data.hours.toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  lessonBox: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    marginRight: 20,
    width: 10,
    height: 10,
  },
  checkBox: {
    marginRight: 20,
    width: 10,
    height: 10,
    backgroundColor: "gray",
    borderRadius: 50,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ListLessonItem;
