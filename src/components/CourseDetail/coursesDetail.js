import React, { useContext, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import VideoPlayer from "./VideoPlayer/videoPlayer";
import Information from "./Information/information";
import ListLesson from "./ListLesson/listLesson";
import { AuthorsContext } from "../../provider/authors-provider";
import { CoursesContext } from "../../provider/courses-provider";
import { AuthenticationContext } from "../../provider/authentication-provider";

const CoursesDetail = (props) => {
  const { item } = props.route.params;
  const authenticationContext = useContext(AuthenticationContext);
  // const authorsContext = useContext(AuthorsContext);
  const coursesContext = useContext(CoursesContext);

  useEffect(() => {
    // authorsContext.getDetailAuthor(item.instructorId);
    authenticationContext.checkOwnCourse(item.id, authenticationContext.state.access_token);
    coursesContext.getCourseInfo(item.id, authenticationContext.state.user.id);
  }, []);

  const onPressLeft = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    if (authenticationContext.state.isChecked) {
      console.log(authenticationContext.state.checkOwnCourse);
    }
  }, [authenticationContext.state.isChecked]);

  // console.log("item: ", item);

  return (
    <View>
      <TouchableOpacity style={styles.back} onPress={onPressLeft}>
        <Ionicons name="ios-arrow-back" size={24} color="tomato" />
      </TouchableOpacity>
      <VideoPlayer
        videoUrl={
          authenticationContext.state.checkOwnCourse && coursesContext.state.isGettedCourseInfo
            ? coursesContext.state.courseInfo.promoVidUrl
            : item.promoVidUrl
        }
        imageUrl={item.imageUrl}
      />
      {coursesContext.state.isGettedCourseInfo ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Information
            infor={coursesContext.state.courseInfo}
            authorInfo={coursesContext.state.courseInfo.instructor}
          />
          <ListLesson data={coursesContext.state.courseInfo} />
        </ScrollView>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    margin: 20,
    marginTop: 40,
    position: "absolute",
    zIndex: 1,
  },
});

export default CoursesDetail;
