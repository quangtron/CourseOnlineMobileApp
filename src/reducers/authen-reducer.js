import {
  LOGIN_REQUEST,
  LOGIN_SUCCESSED,
  LOGIN_FAILED,
  CHECK_OWN_COURSE_REQUEST,
  CHECK_OWN_COURSE_SUCCESSED,
  CHECK_OWN_COURSE_FAILED,
  LIKE_COURSE_REQUEST,
  LIKE_COURSE_SUCCESSED,
  LIKE_COURSE_FAILED,
  CHECK_LIKE_STATUS_REQUEST,
  CHECK_LIKE_STATUS_SUCCESSED,
  CHECK_LIKE_STATUS_FAILED,
  GET_COURSES_LIKED_REQUEST,
  GET_COURSES_LIKED_SUCCESSED,
  GET_COURSES_LIKED_FAILED,
  CHANGE_INFO_USER_REQUEST,
  CHANGE_INFO_USER_SUCCESSED,
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
    case LIKE_COURSE_REQUEST: case CHECK_LIKE_STATUS_REQUEST:
      return {...preState, isLikingCourse: true}
    case LIKE_COURSE_SUCCESSED: case CHECK_LIKE_STATUS_SUCCESSED:
      return {...preState, isLikingCourse: false, isLikedCourse: true, likeStatus: action.data}
    case LIKE_COURSE_FAILED: case CHECK_LIKE_STATUS_SUCCESSED:
      return {...preState, isLikingCourse: false, isLikedCourse: false}
    case GET_COURSES_LIKED_REQUEST:
      return {...preState, isGettingCoursesLiked: true}
    case GET_COURSES_LIKED_SUCCESSED:
      return {...preState, isGettingCoursesLiked: false, isGettedCoursesLiked: true, coursesLiked: action.data}
    case GET_COURSES_LIKED_FAILED:
      return {...preState, isGettingCoursesLiked: false, isGettedCoursesLiked: false}
    case CHANGE_INFO_USER_REQUEST:
      return {...preState, isChanging: true}
    case CHANGE_INFO_USER_SUCCESSED:
      return {...preState, isChanging: false, isChanged: true, user: action.data}
    case CHANGE_INFO_USER_SUCCESSED:
      return {...preState, isChanging: false, isChanged: false}

    default:
      // throw new Error();
      return {...preState}
  }
};
