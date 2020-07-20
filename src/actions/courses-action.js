import { apiNewCourses, apiTopSell, apiTopRate, apiGetCourseInfo } from "../core/services/courses-services";

export const NEW_COURSES_REQUEST = 'NEW_COURSES_REQUEST';
export const NEW_COURSES_SUCCESSED = 'NEW_COURSES_SUCCESSED';
export const NEW_COURSES_FAILED = 'NEW_COURSES_FAILED';

export const TOP_SELL_REQUEST = 'TOP_SELL_REQUEST';
export const TOP_SELL_SUCCESSED = 'TOP_SELL_SUCCESSED';
export const TOP_SELL_FAILED = 'TOP_SELL_FAILED';

export const TOP_RATE_REQUEST = 'TOP_RATE_REQUEST';
export const TOP_RATE_SUCCESSED = 'TOP_RATE_SUCCESSED';
export const TOP_RATE_FAILED = 'TOP_RATE_FAILED';

export const GET_COURSE_INFO_REQUEST = 'GET_COURSE_INFO_REQUEST';
export const GET_COURSE_INFO_SUCCESSED = 'GET_COURSE_INFO_SUCCESSED';
export const GET_COURSE_INFO_FAILED = 'GET_COURSE_INFO_FAILED';

const getNewCoursesSuccessed = (data) => ({
    type: NEW_COURSES_SUCCESSED,
    data
})

const getNewCoursesFailed = () => ({
    type: NEW_COURSES_FAILED
})

const getTopSellSuccessed = (data) => ({
    type: TOP_SELL_SUCCESSED,
    data
})

const getTopSellFailed = () => ({
    type: TOP_SELL_FAILED
})

const getTopRateSuccessed = (data) => ({
    type: TOP_RATE_SUCCESSED,
    data
})

const getTopRateFailed = () => ({
    type: TOP_RATE_FAILED
})

const getCourseInfoSuccessed = (data) => ({
    type: GET_COURSE_INFO_SUCCESSED,
    data
})

const getCourseInfoFailed = () => ({
    type: GET_COURSE_INFO_FAILED,
})

export const getNewCourses = (dispatch) => (limit, page) => {
    dispatch({type: NEW_COURSES_REQUEST});

    apiNewCourses(limit, page)
        .then((res) => {
            if(res.status === 200){
                // console.log('new-courses: ', res.data);
                dispatch(getNewCoursesSuccessed(res.data.payload));
            } else {
                dispatch(getNewCoursesFailed());
            }
        })
        .catch((err) => {
            console.log('error: ', err);
            dispatch(getNewCoursesFailed());
        })
}

export const getTopSell = (dispatch) => (limit, page) => {
    dispatch({type: TOP_SELL_REQUEST});

    apiTopSell(limit, page)
        .then((res) => {
            if(res.status === 200){
                // console.log('top sell', res.data);
                dispatch(getTopSellSuccessed(res.data.payload));
            } else {
                dispatch(getTopSellFailed());
            }
        })
        .catch((err) => {
            console.log('error: ', err);
            dispatch(getTopSellFailed());
        })
}

export const getTopRate = (dispatch) => (limit, page) => {
    dispatch({type: TOP_RATE_REQUEST});

    apiTopRate(limit, page)
        .then((res) => {
            if(res.status === 200){
                // console.log('top rate', res.data);
                dispatch(getTopRateSuccessed(res.data.payload));
            } else {
                dispatch(getTopRateFailed());
            }
        })
        .catch((err) => {
            console.log('error: ', err);
            dispatch(getTopRateFailed());
        })
}

export const getCourseInfo = (dispatch) => (id, userId) => {
    dispatch({type: GET_COURSE_INFO_REQUEST});

    apiGetCourseInfo(id, userId)
        .then((res) => {
            if(res.status === 200){
                // console.log('data', res.data.payload);
                dispatch(getCourseInfoSuccessed(res.data.payload));
            } else {
                dispatch(getCourseInfoFailed());
            }
        })
        .catch((err) => {
            console.log('error: ', err);
            dispatch(getCourseInfoFailed());
        })
}