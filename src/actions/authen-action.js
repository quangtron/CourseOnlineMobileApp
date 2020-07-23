import { apiLogin, apiCheckOwnCourse } from "../core/services/authentication-services";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESSED = 'LOGIN_SUCCESSED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const CHECK_OWN_COURSE_REQUEST = 'CHECK_OWN_COURSE_REQUEST';
export const CHECK_OWN_COURSE_SUCCESSED = 'CHECK_OWN_COURSE_SUCCESSED';
export const CHECK_OWN_COURSE_FAILED = 'CHECK_OWN_COURSE_FAILED';

const loginSuccessed = (data) => ({
    type: LOGIN_SUCCESSED,
    data
})

const loginFailed = (message) => ({
    type: LOGIN_FAILED,
    message
})

const checkSuccessed = (data) => ({
    type: CHECK_OWN_COURSE_SUCCESSED,
    data
})

const checkFailed = () => ({
    type: CHECK_OWN_COURSE_FAILED,
})

export const login = (dispatch) => (email, password) => {
    dispatch({type: LOGIN_REQUEST});

    apiLogin(email, password)
        .then((res) => {
            if(res.status === 200){
                dispatch(loginSuccessed(res.data));
            } else {
                dispatch(loginFailed());
            }
        })
        .catch((err) => {
            console.log('error: ', err.response);
            dispatch(loginFailed(err.response.data.message));
        })
}

export const checkOwnCourse = (dispatch) => (id, token) => {
    dispatch({type: CHECK_OWN_COURSE_REQUEST});

    apiCheckOwnCourse(id, token)
        .then((res) => {
            if(res.status === 200){
                // console.log('data: ', res);
                dispatch(checkSuccessed(res.data.payload));
            } else {
                dispatch(checkFailed());
            }
        })
        .catch((err) => {
            console.log('error: ', err);
            dispatch(checkFailed());
        })
}