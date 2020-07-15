import React, { useContext, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import VideoPlayer from "./VideoPlayer/videoPlayer";
import Information from "./Information/information";
import ListLesson from "./ListLesson/listLesson";
import { BookmarksContext } from "../../provider/bookmarks-provider";
import { AuthorsContext } from "../../provider/authors-provider";
import { CoursesContext } from "../../provider/courses-provider";

const CoursesDetail = (props) => {
  const { item } = props.route.params;
  const { bookmarks } = useContext(BookmarksContext);
  const authorsContext = useContext(AuthorsContext);
  const coursesContext = useContext(CoursesContext);

  useEffect(() => {
    authorsContext.getDetailAuthor(item.instructorId);
    coursesContext.getCourseInfo(item.id);
  }, []);

  const onPressLeft = () => {
    props.navigation.goBack();
  };

  console.log('item: ', item);

  return (
    <View>
      <TouchableOpacity style={styles.back} onPress={onPressLeft}>
        <Ionicons name="ios-arrow-back" size={24} color="tomato" />
      </TouchableOpacity>
      <VideoPlayer videoUrl={item.promoVidUrl} imageUrl={item.imageUrl} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {authorsContext.state.isGettedDetailAuthor && coursesContext.state.isGettedCourseInfo ? (
          <Information infor={coursesContext.state.courseInfo} authorInfo={authorsContext.state.author} />
        ) : (
          <ActivityIndicator />
        )}
        <ListLesson />
      </ScrollView>
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
