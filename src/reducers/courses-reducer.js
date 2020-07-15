import { NEW_COURSES_REQUEST, NEW_COURSES_SUCCESSED, NEW_COURSES_FAILED, TOP_SELL_REQUEST, TOP_SELL_SUCCESSED, TOP_SELL_FAILED, TOP_RATE_REQUEST, TOP_RATE_SUCCESSED, TOP_RATE_FAILED, GET_COURSE_INFO_REQUEST, GET_COURSE_INFO_SUCCESSED, GET_COURSE_INFO_FAILED } from "../actions/courses-action";

export const newCoursesReducer = (preState, action) => {
    switch (action.type) {
        case NEW_COURSES_REQUEST:
            return {...preState, isGetting: true}
        case NEW_COURSES_SUCCESSED:
            return {...preState, isGetting: false, isGetted: true, newCourses: action.data}
        case NEW_COURSES_FAILED:
            return {...preState, isGetting: false, isGetted: false}
        case TOP_SELL_REQUEST:
            return {...preState, isGettingTopSell: true}
        case TOP_SELL_SUCCESSED:
            return {...preState, isGettingTopSell: false, isGettedTopSell: true, topSell: action.data}
        case TOP_SELL_FAILED:
            return {...preState, isGettingTopSell: false, isGettedTopSell: false}
        case TOP_RATE_REQUEST:
            return {...preState, isGettingTopRate: true}
        case TOP_RATE_SUCCESSED:
            return {...preState, isGettingTopRate: false, isGettedTopRate: true, topRate: action.data}
        case TOP_RATE_FAILED:
            return {...preState, isGettingTopRate: false, isGettedTopRate: true}
        case GET_COURSE_INFO_REQUEST:
            return {...preState, isGettingCourseInfo: true}
        case GET_COURSE_INFO_SUCCESSED:
            return {...preState, isGettingCourseInfo: false, isGettedCourseInfo: true, courseInfo: action.data}
        case GET_COURSE_INFO_FAILED:
            return {...preState, isGettingCourseInfo: false, isGettedCourseInfo: false}
        default:
            throw new Error();
    }
}