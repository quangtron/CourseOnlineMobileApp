import React, { useState, useReducer } from "react";
import { authenReducer } from "../reducers/authen-reducer";
import { login, checkOwnCourse, likeCourse, checkLikeCourse, getCoursesLiked } from "../actions/authen-action";

const AuthenticationContext = React.createContext();

const initialState = {
  user: {},
  access_token: null,
  message: null,
  checkOwnCourse: {},
  likeStatus: false,
  coursesLiked: null,
  isLogining: false,
  isLogined: false,
  isChecking: false,
  isChecked: false,
  isLikingCourse: false,
  isLikedCourse: false,
  isGettingCoursesLiked: false,
  isGettedCoursesLiked: false,
};

const AuthenticationProvider = (props) => {
  const [state, dispatch] = useReducer(authenReducer, initialState);

  return (
    <AuthenticationContext.Provider
      value={{
        state,
        login: login(dispatch),
        checkOwnCourse: checkOwnCourse(dispatch),
        likeCourse: likeCourse(dispatch),
        checkLikeCourse: checkLikeCourse(dispatch),
        getCoursesLiked: getCoursesLiked(dispatch),
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationProvider, AuthenticationContext };
