import React, { useReducer } from "react";

import { newCoursesReducer } from "../reducers/courses-reducer";
import {
  getNewCourses,
  getTopSell,
  getTopRate,
  getCourseInfo,
  getMyCourses,
  searchCourse,
  getCoursesCategory,
  getLesson,
  getSearchHistory,
  deleteSearchHistory,
} from "../actions/courses-action";

const CoursesContext = React.createContext();

const initialState = {
  isGetting: false,
  isGetted: false,
  isGettingTopSell: false,
  isGettedTopSell: false,
  isGettingTopRate: false,
  isGettedTopRate: false,
  isGettingCourseInfo: false,
  isGettedCourseInfo: false,
  isGettingMyCourses: false,
  isGettedMyCourses: false,
  isSearchingCourse: false,
  isSearchedCourse: false,
  newCourses: null,
  topSell: null,
  topRate: null,
  courseInfo: null,
  myCourses: null,
  resultSearch: null,
  coursesCategory: null,
  lesson: null,
  searchHistory: null,
  isDelete: false,
};

const CoursesProvider = (props) => {
  const [state, dispatch] = useReducer(newCoursesReducer, initialState);

  return (
    <CoursesContext.Provider
      value={{
        state,
        getNewCourses: getNewCourses(dispatch),
        getTopSell: getTopSell(dispatch),
        getTopRate: getTopRate(dispatch),
        getCourseInfo: getCourseInfo(dispatch),
        getMyCourses: getMyCourses(dispatch),
        searchCourse: searchCourse(dispatch),
        coursesCategory: getCoursesCategory(dispatch),
        getLesson: getLesson(dispatch),
        getSearchHistory: getSearchHistory(dispatch),
        deleteSearchHistory: deleteSearchHistory(dispatch),
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export { CoursesProvider, CoursesContext };
