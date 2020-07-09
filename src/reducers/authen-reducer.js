import {
  LOGIN_REQUEST,
  LOGIN_SUCCESSED,
  LOGIN_FAILED,
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

    default:
      throw new Error();
  }
};
