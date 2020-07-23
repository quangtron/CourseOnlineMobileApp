import {
  LOGIN_REQUEST,
  LOGIN_SUCCESSED,
  LOGIN_FAILED,
  CHECK_OWN_COURSE_REQUEST,
  CHECK_OWN_COURSE_SUCCESSED,
  CHECK_OWN_COURSE_FAILED,
} from "../actions/authen-action";

export const authenReducer = (preState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...preState, isLogining: true };
    case LOGIN_SUCCESSED:
      return {
        ...preState,
        isLogining: false,
        isLogined: true,
        user: action.data.userInfo,
        access_token: action.data.token,
        // message: action.data.message,
      };
    case LOGIN_FAILED:
      return { ...preState, isLogining: false, isLogined: false, message: action.message };
    case CHECK_OWN_COURSE_REQUEST:
      return {...preState, isChecking: true}
    case CHECK_OWN_COURSE_SUCCESSED:
      return {...preState, isChecking: false, isChecked: true, checkOwnCourse: action.data}
    case CHECK_OWN_COURSE_FAILED:
      return {...preState, isChecking: false, isChecked: false}

    default:
      // throw new Error();
      return {...preState}
  }
};
