import React, { useContext, useEffect, useState } from "react";
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
import { CoursesContext } from "../../provider/courses-provider";
import { AuthenticationContext } from "../../provider/authentication-provider";
import SectionCourses from "../Main/Home/SectionCourses/sectionCourses";

const CoursesDetail = (props) => {
  const { item } = props.route.params;
  const authenticationContext = useContext(AuthenticationContext);
  const coursesContext = useContext(CoursesContext);
  const [linkVideo, setLinkVideo] = useState("");

  useEffect(() => {
    authenticationContext.checkOwnCourse(
      item.id,
      authenticationContext.state.access_token
    );
    authenticationContext.checkLikeCourse(
      item.id,
      authenticationContext.state.access_token
    );
    coursesContext.getCourseInfo(item.id, authenticationContext.state.user.id);
    setLinkVideo("");
  }, [item.id]);

  useEffect(() => {
    if (authenticationContext.state.isChecked) {
      console.log(authenticationContext.state.checkOwnCourse);
    }
  }, [authenticationContext.state.isChecked]);

  const onPressLeft = () => {
    coursesContext.getMyCourses(authenticationContext.state.access_token);
    props.navigation.goBack();
  };

  const onHandleSwitchVideo = (video) => {
    setLinkVideo(video);
  };
  // console.log("item: ", item.id);

  return (
    <View>
      <TouchableOpacity style={styles.back} onPress={onPressLeft}>
        <Ionicons name="ios-arrow-back" size={24} color="tomato" />
      </TouchableOpacity>
      <VideoPlayer
        videoUrl={
          authenticationContext.state.checkOwnCourse &&
          coursesContext.state.isGettedCourseInfo
            ? coursesContext.state.courseInfo.promoVidUrl
            : item.promoVidUrl
        }
        videoLesson={linkVideo}
        imageUrl={item.imageUrl || item.courseImage}
      />
      {coursesContext.state.isGettedCourseInfo ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 250 }}
        >
          <Information
            infor={coursesContext.state.courseInfo}
            authorInfo={coursesContext.state.courseInfo.instructor}
            navigation={props.navigation}
          />
          <ListLesson
            onHandleSwitchVideo={onHandleSwitchVideo}
            videoLesson={linkVideo}
            data={coursesContext.state.courseInfo}
          />
          <View style={{ marginLeft: 20, marginBottom: 20 }}>
            <SectionCourses
              dataSection={coursesContext.state.courseInfo.coursesLikeCategory}
              navigation={props.navigation}
              title="CÁC KHOÁ HỌC CÙNG CHỦ ĐỀ"
            />
          </View>
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
