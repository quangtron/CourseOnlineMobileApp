import React, { useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";

import ImageButton from "../../Common/ImageButton";
import SectionPopularSkills from "./SectionPopularSkills/sectionPopularSkills";
import SectionAuthors from "./SectionAuthors/sectionAuthors";
import { Images } from "../../../global/constants";
import { AuthorsContext } from "../../../provider/authors-provider";
import { CategoriesContext } from "../../../provider/categories-provider";
import { CoursesContext } from "../../../provider/courses-provider";

const Browse = (props) => {
  const authorContext = useContext(AuthorsContext);
  const categoriesContext = useContext(CategoriesContext);
  const coursesContext = useContext(CoursesContext);

  useEffect(() => {
    authorContext.getAllAuthors();
    categoriesContext.getAllCategories();
    coursesContext.getNewCourses(10, 1);
  }, []);

  return (
    <ScrollView style={styles.browse} showsVerticalScrollIndicator={false}>
      {coursesContext.state.isGetted
        ? <View style={styles.imgBtnTop}>
          <ImageButton
            title="KHOÁ HỌC MỚI"
            img={Images.NewReleases}
            navigation={props.navigation}
            items={coursesContext.state.newCourses}
          />
        </View>
        : <ActivityIndicator />
      }
      {coursesContext.state.isGetted
        ? <View style={styles.imgBtnDown}>
            <ImageButton
              title="Khoá học đề xuất cho bạn"
              img={Images.Recommended}
              items={coursesContext.state.newCourses}
              navigation={props.navigation}
            />
          </View>
        : <ActivityIndicator />
      }

      {categoriesContext.state.isGetted
      ? <SectionPopularSkills
        title="Chủ đề khoá học"
        navigation={props.navigation}
        items={categoriesContext.state.categories}
        img={Images.Code}
      />
      : <ActivityIndicator />}
      
      {authorContext.state.isGettedAllAuthors ? (
        <View style={{marginLeft: 5}}>
          <SectionAuthors
            title="DANH SÁCH TÁC GIẢ"
            navigation={props.navigation}
            items={authorContext.state.authors}
          />
        </View>
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
    margin: 20,
  },
  imgBtnDown: {
    margin: 20,
    marginTop: 0,
  },
});

export default Browse;
