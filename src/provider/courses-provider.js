import React, { useReducer } from "react";

import { newCoursesReducer } from "../reducers/courses-reducer";
import {
  getNewCourses,
  getTopSell,
  getTopRate,
  getCourseInfo,
  getMyCourses,
  searchCourse,
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
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export { CoursesProvider, CoursesContext };
