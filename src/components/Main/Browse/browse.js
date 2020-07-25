import React, { useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";

import ImageButton from "../../Common/ImageButton";
import SectionPopularSkills from "./SectionPopularSkills/sectionPopularSkills";
import SectionSpecialized from "./SectionSpecialized/sectionSpecialized";
import SectionPaths from "./SectionPaths/sectionPaths";
import SectionAuthors from "./SectionAuthors/sectionAuthors";
import { MainContext } from "../../../provider/main-provider";
import { Images } from "../../../global/constants";
import { AuthorsContext } from "../../../provider/authors-provider";

const Browse = (props) => {
  const { main } = useContext(MainContext);
  const authorContext = useContext(AuthorsContext);

  useEffect(() => {
    authorContext.getAllAuthors();
  }, []);

  return (
    <ScrollView style={styles.browse} showsVerticalScrollIndicator={false}>
      <View style={styles.imgBtnTop}>
        <ImageButton
          title="NEW RELEASES"
          img={Images.NewReleases}
          navigation={props.navigation}
          items={main.Courses}
        />
      </View>
      <View style={styles.imgBtnDown}>
        <ImageButton
          title="RECOMMENDED FOR YOU"
          img={Images.Recommended}
          items={main.Courses}
          navigation={props.navigation}
        />
      </View>
      <SectionPopularSkills
        title="Popular Skills"
        navigation={props.navigation}
      />
      <SectionSpecialized navigation={props.navigation} />
      <SectionPaths
        title="Paths"
        navigation={props.navigation}
        items={main.Courses}
      />
      {authorContext.state.isGettedAllAuthors ? (
        <SectionAuthors
          title="DANH SÁCH TÁC GIẢ"
          navigation={props.navigation}
          items={authorContext.state.authors}
        />
      ) : (
        <ActivityIndicator />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  browse: {
    marginTop: 10,
  },
  imgBtnTop: {
    margin: 15,
  },
  imgBtnDown: {
    margin: 15,
    marginTop: 0,
  },
});

export default Browse;
