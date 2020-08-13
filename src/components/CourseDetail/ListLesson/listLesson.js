import "react-native-gesture-handler";
import React, { useContext } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ListLessonItem from "../ListLessonItem/listLessonItem";
import HeaderLesson from "./HeaderLesson/headerLesson";
import Separator from "../../Common/Separator";
import { SettingCommonContext } from "../../../provider/settingCommon-provider";

const ListLesson = (props) => {
  const {language, setLanguage} = useContext(SettingCommonContext);
  const { data } = props;
  const Tab = createMaterialTopTabNavigator();

  const renderListLessons = (data) => {
    return data.map((item, index) => (
      <ListLessonItem
        onHandleSwitchVideo={onHandleSwitchVideo}
        videoLesson={props.videoLesson}
        data={item}
        key={index}
      />
    ));
  };

  const renderSectionHeader = (data, index) => {
    return (
      <View key={index} style={{ marginBottom: 30 }}>
        {index !== 0 ? <Separator /> : <View />}
        <HeaderLesson data={data} index={index} />
        {renderListLessons(data.lesson)}
      </View>
    );
  };

  const renderCourses = (data) => {
    return data.map((item, index) => {
      return renderSectionHeader(item, index);
    });
  };

  function TranscriptScreen() {
    return (
      <View style={styles.transcriptScreen}>
        <TextInput
          style={styles.inputSearch}
          autoFocus={true}
          clearButtonMode="always"
          placeholder="Search Transcript"
        />
      </View>
    );
  }

  const onHandleSwitchVideo = (video) => {
    props.onHandleSwitchVideo(video);
  };

  const ContentsScreen = () => {
    return (
      <View style={styles.contentsBox}>{renderCourses(data.section)}</View>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name={language ? 'Content' : "Nội dung"} component={ContentsScreen} />
      <Tab.Screen name="Transcript" component={TranscriptScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  contentsBox: {
    flex: 1,
    margin: 20,
    marginBottom: 0,
    // height: 400,
  },
  inputSearch: {
    marginTop: 10,
    width: "90%",
    height: 35,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  transcriptScreen: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListLesson;
