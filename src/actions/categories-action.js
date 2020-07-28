import { apiGetAllCategories } from "../core/services/categories-services";

export const GET_ALL_CATEGORIES_REQUEST = 'GET_ALL_CATEGORIES_REQUEST';
export const GET_ALL_CATEGORIES_SUCCESSED = 'GET_ALL_CATEGORIES_SUCCESSED';
export const GET_ALL_CATEGORIES_FAILED = 'GET_ALL_CATEGORIES_FAILED';

const getAllCategoriesSuccessed = (data) => ({
    type: GET_ALL_CATEGORIES_SUCCESSED,
    data
})

const getAllCategoriesFailed = () => ({
    type: GET_ALL_CATEGORIES_FAILED,
})

export const getAllCategories = (dispatch) => () => {
    dispatch({type: GET_ALL_CATEGORIES_REQUEST});

    apiGetAllCategories()
        .then((res) => {
            if(res.status === 200){
                // console.log('data', res.data);
                dispatch(getAllCategoriesSuccessed(res.data.payload));
            } else {
                dispatch(getAllCategoriesFailed());
            }
        })
        .catch((err) => {
            console.log('err', err);
            dispatch(getAllCategoriesFailed());
        })
}