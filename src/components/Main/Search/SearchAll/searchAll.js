import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

import Styles from "../../../Common/Styles";
import DownloadItem from "../../Download/DownloadItem/downloadItem";
import Separator from "../../../Common/Separator";
import { CoursesContext } from "../../../../provider/courses-provider";
import { SettingCommonContext } from "../../../../provider/settingCommon-provider";

const SearchAll = (props) => {
  const {theme} = useContext(SettingCommonContext);
  const courseContext = useContext(CoursesContext);

  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View style={styles.container(theme)}>
      <View style={styles.searchAll}>
        <View style={styles.results}>
          <Text style={Styles.text(18, theme ? "#fff" : "#000", "bold")}>
            {courseContext.state.isSearchedCourse
              ? courseContext.state.resultSearch.count
              : 0}{" "}
            kết quả{" "}
            {props.keyword ? (
              <Text style={{color: theme ? "#fff" : "#000"}}>
                cho từ khoá{" "}
                <Text style={{ color: "#2196F3" }}>{props.keyword}</Text>
              </Text>
            ) : (
              ""
            )}
          </Text>
        </View>
        {courseContext.state.isSearchedCourse &&
        courseContext.state.resultSearch.rows.length > 0 ? (
          <FlatList
            data={courseContext.state.resultSearch.rows}
            renderItem={({ item }) => (
              <DownloadItem item={item} navigation={props.navigation} />
            )}
            ItemSeparatorComponent={Separator}
            showsVerticalScrollIndicator={false}
            style={{height: (screenHeight - 210)*7.6/10}}
          />
        ) : (
          <View />
        )}
      </View>
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
  },
  results: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    height: 20,
  },
});

export default SearchAll;
