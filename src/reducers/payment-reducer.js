import { GET_COURSE_INFO_PAYMENT_REQUEST, GET_COURSE_INFO_PAYMENT_SUCCESSED, GET_COURSE_INFO_PAYMENT_FAILED, GET_FREE_COURSE_REQUEST, GET_FREE_COURSE_SUCCESSED, GET_FREE_COURSE_FAILED } from "../actions/payment-action"

export const paymentReducer = (preState, action) => {
    switch (action.type) {
        case GET_COURSE_INFO_PAYMENT_REQUEST:
            return {...preState, isGettingInfoPayment: true}
        case GET_COURSE_INFO_PAYMENT_SUCCESSED:
            return {...preState, isGettingInfoPayment: false, isGettedInfoPayment: true, infoPayment: action.data}
        case GET_COURSE_INFO_PAYMENT_FAILED:
            return {...preState, isGettingInfoPayment: false, isGettedInfoPayment: false}
        case GET_FREE_COURSE_REQUEST:
            return {...preState, isGettingFreeCourse: true}
        case GET_FREE_COURSE_SUCCESSED:
            return {...preState, isGettingFreeCourse: false, isGettedFreeCourse: true, freeCourseLink: action.data}
        case GET_FREE_COURSE_FAILED:
            return {...preState, isGettingFreeCourse: false, isGettedFreeCourse: false}
        default:
            return {...preState}
    }
}