import { GET_ALL_CATEGORIES_REQUEST, GET_ALL_CATEGORIES_SUCCESSED, GET_ALL_CATEGORIES_FAILED } from "../actions/categories-action";

export const categoriesReducer = (preState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES_REQUEST:
            return {...preState, isGetting: true}
        case GET_ALL_CATEGORIES_SUCCESSED:
            return {...preState, isGetting: false, isGetted: true, categories: action.data}
        case GET_ALL_CATEGORIES_FAILED:
            return {...preState, isGetting: false, isGetted: false}
    
        default:
            return {...preState}
    }
}