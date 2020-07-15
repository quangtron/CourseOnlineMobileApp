import React, { useReducer } from "react";

import { newCoursesReducer } from "../reducers/courses-reducer";
import {
  getNewCourses,
  getTopSell,
  getTopRate,
  getCourseInfo,
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
  newCourses: null,
  topSell: null,
  topRate: null,
  courseInfo: null,
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
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export { CoursesProvider, CoursesContext };
