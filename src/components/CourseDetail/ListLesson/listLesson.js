import "react-native-gesture-handler";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ListLessonItem from "../ListLessonItem/listLessonItem";
import HeaderLesson from "./HeaderLesson/headerLesson";
import Separator from "../../Common/Separator";
import { SettingCommonContext } from "../../../provider/settingCommon-provider";
import { CoursesContext } from "../../../provider/courses-provider";

const ListLesson = (props) => {
  const coursesContext = useContext(CoursesContext);
  const {language} = useContext(SettingCommonContext);
  const [lesson, setLesson] = useState([]);
  const { data } = props;
  const Tab = createMaterialTopTabNavigator();

  useEffect(() => {
    if(coursesContext.state.lesson) {
      setLesson(coursesContext.state.lesson.exercises)
    }
  }, [coursesContext.state.lesson])

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

  const renderListExercises = (data) => {
    return data.map((item, index) => <Text style={{fontSize: 16}} key={index}>{language ? 'Exercise ' : 'Bài tập '}{index + 1}:  {item.title}</Text>)
  }

  function TranscriptScreen() {
    return(
      <View style={styles.exercises}>
        <Text style={{fontSize: 16}}>{lesson.length <= 0 ? (language ? 'Exercise is empty' : 'Không có bài tập nào') : renderListExercises(lesson)}</Text>
      </View>
    )
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
      <Tab.Screen name={language ? 'Lesson' : 'Bài tập'} component={TranscriptScreen} />
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
  exercises: {
    margin: 20,
    marginBottom: 10,
    flexDirection: 'column',
  }
});

export default ListLesson;
