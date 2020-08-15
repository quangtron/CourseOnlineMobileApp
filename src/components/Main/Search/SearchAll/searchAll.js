import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

import Styles from "../../../Common/Styles";
import DownloadItem from "../../Download/DownloadItem/downloadItem";
import Separator from "../../../Common/Separator";
import { CoursesContext } from "../../../../provider/courses-provider";
import { SettingCommonContext } from "../../../../provider/settingCommon-provider";
import AuthorsResult from "../AuthorsResult/authorsResult";
import { ScreenKey } from "../../../../global/constants";

const screenHeight = Math.round(Dimensions.get('window').height);

const SearchAll = (props) => {
  const {theme, language} = useContext(SettingCommonContext);
  const courseContext = useContext(CoursesContext);

  return (
    <View style={styles.container(theme)}>
      <ScrollView style={styles.searchAll} showsVerticalScrollIndicator={false}>
        <View style={styles.results}>
          <Text style={Styles.text(18, theme ? "#fff" : "#000", "bold")}>
            {courseContext.state.isSearchedCourse
              ? courseContext.state.resultSearch.courses.totalInPage
              : 0}{" "}
            {language ? 'courses ' : 'khoá học '}
            {props.keyword ? (
              <Text style={{color: theme ? "#fff" : "#000"}}>
                {language ? 'for keyword ' : 'cho từ khoá '}
                <Text style={{ color: "#2196F3" }}>{props.keyword}</Text>
              </Text>
            ) : (
              ""
            )}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate(language ? ScreenKey.Courses : 'Khoá học')}>
            <AntDesign name="rightcircleo" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {courseContext.state.isSearchedCourse &&
        courseContext.state.resultSearch.courses.data.length > 0 ? (
          <FlatList
            data={courseContext.state.resultSearch.courses.data}
            renderItem={({ item }) => (
              <DownloadItem item={item} navigation={props.navigation} />
            )}
            ItemSeparatorComponent={Separator}
            showsVerticalScrollIndicator={false}
            style={{height: (screenHeight - 330)*5.8/10, marginBottom: 30}}
          />
        ) : (
          <View />
        )}

        <View style={styles.results}>
          <Text style={Styles.text(18, theme ? "#fff" : "#000", "bold")}>
            {courseContext.state.isSearchedCourse
              ? courseContext.state.resultSearch.instructors.totalInPage
              : 0}{" "}
            {language ? 'author ' : 'tác giả '}
            {props.keyword ? (
              <Text style={{color: theme ? "#fff" : "#000"}}>
                {language ? 'for keyword ' : 'cho từ khoá '}
                <Text style={{ color: "#2196F3" }}>{props.keyword}</Text>
              </Text>
            ) : (
              ""
            )}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate(language ? ScreenKey.Authors : 'Tác giả')}>
            <AntDesign name="rightcircleo" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {courseContext.state.isSearchedCourse &&
        courseContext.state.resultSearch.instructors.data.length > 0 ? (
          <FlatList
            data={courseContext.state.resultSearch.instructors.data}
            renderItem={({ item }) => (
              <AuthorsResult item={item} navigation={props.navigation} />
            )}
            ItemSeparatorComponent={Separator}
            showsVerticalScrollIndicator={false}
            style={{height: (screenHeight - 320)*7.6/10}}
          />
        ) : (
          <View />
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
  searchAll: {
    margin: 20,
    height: (screenHeight - 210)*7.6/10
  },
  results: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    height: 20,
  },
});

export default SearchAll;
