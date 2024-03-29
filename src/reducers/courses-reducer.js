import { NEW_COURSES_REQUEST, NEW_COURSES_SUCCESSED, NEW_COURSES_FAILED, TOP_SELL_REQUEST, TOP_SELL_SUCCESSED, TOP_SELL_FAILED, TOP_RATE_REQUEST, TOP_RATE_SUCCESSED, TOP_RATE_FAILED, GET_COURSE_INFO_REQUEST, GET_COURSE_INFO_SUCCESSED, GET_COURSE_INFO_FAILED, GET_MY_COURSES_SUCCESSED, GET_MY_COURSES_REQUEST, GET_MY_COURSES_FAILED, SEARCH_COURSE_REQUEST, SEARCH_COURSE_SUCCESSED, SEARCH_COURSE_FAILED, GET_COURSES_CATEGORY_REQUEST, GET_COURSES_CATEGORY, GET_LESSON_REQUEST, GET_LESSON, GET_SEARCH_HISTORY_REQUEST, GET_SEARCH_HISTORY, DELETE_SEARCH_HISTORY_REQUEST, DELETE_SEARCH_HISTORY } from "../actions/courses-action";

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
        case GET_MY_COURSES_REQUEST:
            return {...preState, isGettingMyCourses: true}
        case GET_MY_COURSES_SUCCESSED:
            return {...preState, isGettingMyCourses: false, isGettedMyCourses: true, myCourses: action.data}
        case GET_MY_COURSES_FAILED:
            return {...preState, isGettingMyCourses: false, isGettedMyCourses: false}
        case SEARCH_COURSE_REQUEST:
            return {...preState, isSearchingCourse: true}
        case SEARCH_COURSE_SUCCESSED:
            return {...preState, isSearchingCourse: false, isSearchedCourse: true, resultSearch: action.data}
        case SEARCH_COURSE_FAILED:
            return {...preState, isSearchingCourse: false, isSearchedCourse: false}
        case GET_COURSES_CATEGORY_REQUEST:
            return {...preState}
        case GET_COURSES_CATEGORY:
            return {...preState, coursesCategory: action.data}
        case GET_LESSON_REQUEST:
            return {...preState}
        case GET_LESSON:
            return {...preState, lesson: action.data}
        case GET_SEARCH_HISTORY_REQUEST:
            return {...preState}
        case GET_SEARCH_HISTORY:
            return {...preState, searchHistory: action.data}
        case DELETE_SEARCH_HISTORY_REQUEST:
            return {...preState}
        case DELETE_SEARCH_HISTORY:
            return {...preState, isDelete: action.data}
        
        default:
            throw new Error();
    }
}