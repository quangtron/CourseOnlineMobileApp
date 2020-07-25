import { apiLogin, apiCheckOwnCourse, apiLikeCourse, apiCheckLikeStatus, apiGetCoursesLiked } from "../core/services/authentication-services";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESSED = 'LOGIN_SUCCESSED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const CHECK_OWN_COURSE_REQUEST = 'CHECK_OWN_COURSE_REQUEST';
export const CHECK_OWN_COURSE_SUCCESSED = 'CHECK_OWN_COURSE_SUCCESSED';
export const CHECK_OWN_COURSE_FAILED = 'CHECK_OWN_COURSE_FAILED';

export const LIKE_COURSE_REQUEST = 'LIKE_COURSE_REQUEST';
export const LIKE_COURSE_SUCCESSED = 'LIKE_COURSE_SUCCESSED';
export const LIKE_COURSE_FAILED = 'LIKE_COURSE_FAILED';

export const CHECK_LIKE_STATUS_REQUEST = 'CHECK_LIKE_STATUS_REQUEST';
export const CHECK_LIKE_STATUS_SUCCESSED = 'CHECK_LIKE_STATUS_SUCCESSED';
export const CHECK_LIKE_STATUS_FAILED = 'CHECK_LIKE_STATUS_FAILED';

export const GET_COURSES_LIKED_REQUEST = 'GET_COURSES_LIKED_REQUEST';
export const GET_COURSES_LIKED_SUCCESSED = 'GET_COURSES_LIKED_SUCCESSED';
export const GET_COURSES_LIKED_FAILED = 'GET_COURSES_LIKED_FAILED';

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

const likeCourseSuccessed = (data) => ({
    type: LIKE_COURSE_SUCCESSED,
    data
})
const likeCourseFailed = () => ({
    type: LIKE_COURSE_FAILED,
})

const checkLikeStatusSuccessed = (data) => ({
    type: CHECK_LIKE_STATUS_SUCCESSED,
    data
})
const checkLikeStatusFailed = () => ({
    type: CHECK_LIKE_STATUS_FAILED,
})

const getCoursesLikedSuccessed = (data) => ({
    type: GET_COURSES_LIKED_SUCCESSED,
    data
})
const getCoursesLikedFailed = () => ({
    type: GET_COURSES_LIKED_FAILED,
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

export const likeCourse = (dispatch) => (courseId, token) => {
    dispatch({type: LIKE_COURSE_REQUEST});

    apiLikeCourse(courseId, token)
        .then((res) => {
            if(res.status === 200){
                // console.log(res.data);
                dispatch(likeCourseSuccessed(res.data.likeStatus));
            } else {
                dispatch(likeCourseFailed());
            }
        })
        .catch((err) => {
            console.log('error: ', err);
            dispatch(likeCourseFailed());
        })
}

export const checkLikeCourse = (dispatch) => (courseId, token) => {
    dispatch({type: CHECK_LIKE_STATUS_REQUEST});

    apiCheckLikeStatus(courseId, token)
        .then((res) => {
            if(res.status === 200){
                // console.log(res.data);
                dispatch(checkLikeStatusSuccessed(res.data.likeStatus));
            } else {
                dispatch(checkLikeStatusFailed());
            }
        })
        .catch((err) => {
            console.log('error: ', err);
            dispatch(checkLikeStatusFailed());
        })
}

export const getCoursesLiked = (dispatch) => (token) => {
    dispatch({type: GET_COURSES_LIKED_REQUEST});

    apiGetCoursesLiked(token)
        .then((res) => {
            if(res.status === 200){
                // console.log(res.data);
                dispatch(getCoursesLikedSuccessed(res.data.payload));
            } else {
                dispatch(getCoursesLikedFailed());
            }
        })
        .catch((err) => {
            console.log('error: ', err);
            dispatch(getCoursesLikedFailed());
        })
}