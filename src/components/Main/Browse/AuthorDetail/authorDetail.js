import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AuthorsContext } from "../../../../provider/authors-provider";
import Separator from "../../../Common/Separator";
import Styles from "../../../Common/Styles";
import SectionCourses from "../../Home/SectionCourses/sectionCourses";

const AuthorDetail = (props) => {
  const authorContext = useContext(AuthorsContext);

  const showSkills = (data) => {
    return data.map((item, index) => (
      <Text key={index}>
        <Ionicons name="md-checkmark-circle-outline" size={14} color="tomato" />{" "}
        {item}
      </Text>
    ));
  };

  useEffect(() => {
    authorContext.getDetailAuthor(props.route.params.id);
  }, []);

  props.navigation.setOptions({title: authorContext.state.author ? authorContext.state.author.name : 'Chi tiết' });

  return (
    <ScrollView>
      {authorContext.state.author ? (
        <View style={styles.mainStyle}>
          {/* info basic */}
          <View style={styles.userInfor}>
            <Image
              style={styles.image}
              source={{ uri: authorContext.state.author.avatar }}
            />
            <View style={styles.infoMain}>
              <View>
                <Text style={Styles.text(18, "#000", "normal")}>
                  {authorContext.state.author.name}
                </Text>
                <Text style={Styles.text(16, "#9E9E9E", "normal")}>
                  {authorContext.state.author.major}
                </Text>
              </View>
              <View style={styles.authorDetail}>
                <View style={styles.infoCourse}>
                  <Text style={Styles.text(20, "tomato", "normal")}>
                    {`${authorContext.state.author.soldNumber} `}
                    <Ionicons name="md-people" size={18} color="#FDD835" />
                  </Text>
                  <Text>Học viên</Text>
                </View>
                <View style={styles.infoCourse}>
                  <Text style={Styles.text(20, "tomato", "normal")}>
                    {`${authorContext.state.author.totalCourse} `}
                    <Ionicons
                      name="ios-play-circle"
                      size={18}
                      color="#FDD835"
                    />
                  </Text>
                  <Text>Khoá học</Text>
                </View>
                <View style={styles.infoCourse}>
                  <Text style={Styles.text(20, "tomato", "normal")}>
                    {`${authorContext.state.author.averagePoint.toFixed(1)} `}
                    <Text style={Styles.text(16, "#000", "normal")}> / 5 </Text>
                    <Ionicons name="ios-star" size={18} color="#FDD835" />
                  </Text>
                  <Text>
                    {authorContext.state.author.countRating} lượt đánh giá
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Separator />
          {/* detail info */}
          <View style={styles.section}>
            <Text style={Styles.text(16, "#000", "bold")}>Giới thiệu</Text>
            <Text style={{ marginTop: 10 }}>
              {authorContext.state.author.intro ? (
                authorContext.state.author.intro
              ) : (
                <Text style={styles.textItalic}>(Chưa có thông tin)</Text>
              )}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={Styles.text(16, "#000", "bold")}>Kỹ năng</Text>
            <View style={{ flexDirection: "column", marginTop: 10 }}>
              {authorContext.state.author.skills.length > 0 ? (
                showSkills(authorContext.state.author.skills)
              ) : (
                <Text style={styles.textItalic}>(Chưa có thông tin)</Text>
              )}
            </View>
          </View>
          {/* courses */}
          <SectionCourses
            dataSection={authorContext.state.author.courses}
            navigation={props.navigation}
            title="KHOÁ HỌC CỦA GIẢNG VIÊN"
          />
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userInfor: {
    marginBottom: 20,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  mainStyle: {
    margin: 20,
  },
  infoMain: {
    marginLeft: 10,
    justifyContent: "space-around",
  },
  authorDetail: {
    maxWidth: "59%",
    flexDirection: "row",
  },
  infoCourse: {
    marginRight: 18,
    alignItems: "center",
  },
  section: {
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textItalic: {
    fontStyle: "italic",
    color: "#424242",
  },
});

export default AuthorDetail;
