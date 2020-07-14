import React, { useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";

import SectionCourses from "./SectionCourses/sectionCourses";
import { MainContext } from "../../../provider/main-provider";
import { BookmarksContext } from "../../../provider/bookmarks-provider";
import { CoursesContext } from "../../../provider/courses-provider";

function Home(props) {
  const { main } = useContext(MainContext);
  const { bookmarks } = useContext(BookmarksContext);
  const coursesContext = useContext(CoursesContext);

  useEffect(() => {
    coursesContext.getNewCourses(10, 1);
    coursesContext.getTopSell(10, 1);
    coursesContext.getTopRate(10, 1);
  }, []);

  return (
    <View style={styles.home}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {coursesContext.state.isGetted ? (
          <SectionCourses
            dataSection={coursesContext.state.newCourses}
            navigation={props.navigation}
            title="NEW COURSES"
          />
        ) : (
          <ActivityIndicator />
        )}

        {coursesContext.state.topSell ? (
          <SectionCourses
            dataSection={coursesContext.state.topSell}
            navigation={props.navigation}
            title="TOP SELL"
          />
        ) : (
          <ActivityIndicator />
        )}

        {coursesContext.state.topRate ? (
          <SectionCourses
            dataSection={coursesContext.state.topRate}
            navigation={props.navigation}
            title="TOP RATE"
          />
        ) : (
          <ActivityIndicator />
        )}

        {/* <SectionCourses dataSection={main.Paths} navigation={props.navigation} />
                <SectionCourses dataSection={main.Channels} navigation={props.navigation} />
                <SectionCourses dataSection={{title: 'Bookmarks', data: bookmarks}} navigation={props.navigation} /> */}
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
