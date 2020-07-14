import React, { useReducer } from "react";

import { newCoursesReducer } from "../reducers/courses-reducer";
import {
  getNewCourses,
  getTopSell,
  getTopRate,
} from "../actions/courses-action";

const CoursesContext = React.createContext();

const initialState = {
  isGetting: false,
  isGetted: false,
  isGettingTopSell: false,
  isGettedTopSell: false,
  isGettingTopRate: false,
  isGettedTopRate: false,
  newCourses: null,
  topSell: null,
  topRate: null,
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
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export { CoursesProvider, CoursesContext };
