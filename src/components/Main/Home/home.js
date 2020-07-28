import React, { useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";

import SectionCourses from "./SectionCourses/sectionCourses";
import { CoursesContext } from "../../../provider/courses-provider";
import { AuthenticationContext } from "../../../provider/authentication-provider";

function Home(props) {
  const coursesContext = useContext(CoursesContext);
  const authenticationContext = useContext(AuthenticationContext);

  useEffect(() => {
    coursesContext.getTopSell(10, 1);
    coursesContext.getTopRate(10, 1);
    coursesContext.getMyCourses(authenticationContext.state.access_token);
  }, []);

  useEffect(() => {
    authenticationContext.getCoursesLiked(authenticationContext.state.access_token);
  }, [authenticationContext.state.likeStatus])

  return (
    <View style={styles.home}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {coursesContext.state.topSell ? (
          <SectionCourses
            dataSection={coursesContext.state.topSell}
            navigation={props.navigation}
            title="TOP BÁN CHẠY"
          />
        ) : (
          <ActivityIndicator />
        )}
        {coursesContext.state.topRate ? (
          <SectionCourses
            dataSection={coursesContext.state.topRate}
            navigation={props.navigation}
            title="TOP BÌNH CHỌN"
          />
        ) : (
          <ActivityIndicator />
        )}
        {coursesContext.state.isGettedMyCourses ? (
          <SectionCourses
            dataSection={coursesContext.state.myCourses}
            navigation={props.navigation}
            title="KHOÁ HỌC ĐÃ THAM GIA"
          />
        ) : (
          <ActivityIndicator />
        )}
        {authenticationContext.state.isGettedCoursesLiked ? (
          <SectionCourses
            dataSection={authenticationContext.state.coursesLiked}
            navigation={props.navigation}
            title="KHOÁ HỌC ĐÃ THÍCH"
          />
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    marginLeft: 15,
  },
});

export default Home;
