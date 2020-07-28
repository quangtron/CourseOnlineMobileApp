import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

import Styles from "../../../Common/Styles";
import DownloadItem from "../../Download/DownloadItem/downloadItem";
import Separator from "../../../Common/Separator";
import AuthorsResult from "../AuthorsResult/authorsResult";
import { MainContext } from "../../../../provider/main-provider";
import { SearchContext } from "../../../../provider/search-provider";
import { AuthorsContext } from "../../../../provider/authors-provider";
import { ScreenKey } from "../../../../global/constants";
import {
  searchCP,
  searchAuthors,
} from "../../../../core/services/search-services";
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
          style={{height: screenHeight*6/10}}
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
  },
});

export default SearchAll;
