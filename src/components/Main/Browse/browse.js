import React, { useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";

import ImageButton from "../../Common/ImageButton";
import SectionPopularSkills from "./SectionPopularSkills/sectionPopularSkills";
import SectionAuthors from "./SectionAuthors/sectionAuthors";
import { Images } from "../../../global/constants";
import { AuthorsContext } from "../../../provider/authors-provider";
import { CategoriesContext } from "../../../provider/categories-provider";
import { CoursesContext } from "../../../provider/courses-provider";
import { SettingCommonContext } from "../../../provider/settingCommon-provider";

const Browse = (props) => {
  const authorContext = useContext(AuthorsContext);
  const categoriesContext = useContext(CategoriesContext);
  const coursesContext = useContext(CoursesContext);
  const {language, theme} = useContext(SettingCommonContext);

  useEffect(() => {
    authorContext.getAllAuthors();
    categoriesContext.getAllCategories();
    coursesContext.getNewCourses(10, 1);
  }, []);

  return (
    <View style={styles.container(theme)}>
      <ScrollView style={styles.browse} showsVerticalScrollIndicator={false}>
        {coursesContext.state.isGetted
          ? <View style={styles.imgBtnTop}>
            <ImageButton
              title={language ? "New courses" : "KHOÁ HỌC MỚI"}
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
                title={language ? "Recommend for you" : "Khoá học đề xuất cho bạn"}
                img={Images.Recommended}
                items={coursesContext.state.topRate}
                navigation={props.navigation}
              />
            </View>
          : <ActivityIndicator />
        }

        {categoriesContext.state.isGetted
        ? <SectionPopularSkills
          title={language ? "Categories" : "Chủ đề khoá học"}
          navigation={props.navigation}
          items={categoriesContext.state.categories}
          img={Images.Code}
        />
        : <ActivityIndicator />}
        
        {authorContext.state.isGettedAllAuthors ? (
          <View style={{marginLeft: 5}}>
            <SectionAuthors
              title={language ? "Authors" : "DANH SÁCH TÁC GIẢ"}
              navigation={props.navigation}
              items={authorContext.state.authors}
            />
          </View>
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (bool) => {
    return {
        flex: 1,
        backgroundColor: bool ? '#212121' : '#fff',
    }
  },
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
