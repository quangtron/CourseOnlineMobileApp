import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

import Styles from "../../../Common/Styles";
import DownloadItem from "../../Download/DownloadItem/downloadItem";
import Separator from "../../../Common/Separator";
import { CoursesContext } from "../../../../provider/courses-provider";

const SearchAll = (props) => {
  const courseContext = useContext(CoursesContext);

  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View style={styles.searchAll}>
      <View style={styles.results}>
        <Text style={Styles.text(18, "#000", "bold")}>
          {courseContext.state.isSearchedCourse
            ? courseContext.state.resultSearch.count
            : 0}{" "}
          kết quả{" "}
          {props.keyword ? (
            <Text>
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
          style={{height: (screenHeight - 210)*7.7/10}}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
