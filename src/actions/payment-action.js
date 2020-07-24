import { apiGetCourseInfoForPayment, apiGetFreeCourse } from "../core/services/payment-services";

export const GET_COURSE_INFO_PAYMENT_REQUEST = 'GET_COURSE_INFO_PAYMENT_REQUEST';
export const GET_COURSE_INFO_PAYMENT_SUCCESSED = 'GET_COURSE_INFO_PAYMENT_SUCCESSED';
export const GET_COURSE_INFO_PAYMENT_FAILED = 'GET_COURSE_INFO_PAYMENT_FAILED';

export const GET_FREE_COURSE_REQUEST = 'GET_FREE_COURSE_REQUEST';
export const GET_FREE_COURSE_SUCCESSED = 'GET_FREE_COURSE_SUCCESSED';
export const GET_FREE_COURSE_FAILED = 'GET_FREE_COURSE_FAILED';

const getCourseInfoPaymentSuccessed = (data) => ({
    type: GET_COURSE_INFO_PAYMENT_SUCCESSED,
    data
})

const getCourseInfoPaymentFailed = () => ({
    type: GET_COURSE_INFO_PAYMENT_FAILED,
})

const getFreeCourseSuccessed = (data) => ({
    type: GET_FREE_COURSE_SUCCESSED,
    data
})

const getFreeCourseFailed = () => ({
    type: GET_FREE_COURSE_FAILED,
})

export const getCourseInfoPayment = (dispatch) => (courseId) => {
    dispatch({type: GET_COURSE_INFO_PAYMENT_REQUEST});

    apiGetCourseInfoForPayment(courseId)
        .then((res) => {
            if(res.status === 200){
                // console.log('data', res.data);
                dispatch(getCourseInfoPaymentSuccessed(res.data));
            } else {
                dispatch(getCourseInfoPaymentFailed());
            }
        })
        .catch((err) => {
            console.log('error', err);
            dispatch(getCourseInfoPaymentFailed());
        })
}

export const getFreeCourse = (dispatch) => (courseId, token) => {
    dispatch({type: GET_FREE_COURSE_REQUEST});

    apiGetFreeCourse(courseId, token)
        .then((res) => {
            if(res.status === 200){
                // console.log('data', res.data);
                dispatch(getFreeCourseSuccessed(res.data.freeCourseLink));
            } else {
                dispatch(getFreeCourseFailed());
            }
        })
        .catch((err) => {
            console.log('error', err.response);
            dispatch(getFreeCourseFailed());
        })
}