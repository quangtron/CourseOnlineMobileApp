import { apiGetAllAuthors, apiGetDetailAuthor } from "../core/services/authors-services";

export const GET_ALL_AUTHORS_REQUEST = 'GET_ALL_AUTHORS_REQUEST';
export const GET_ALL_AUTHORS_SUCCESSED = 'GET_ALL_AUTHORS_SUCCESSED';
export const GET_ALL_AUTHORS_FAILED = 'GET_ALL_AUTHORS_FAILED';

export const GET_DETAIL_AUTHOR_REQUEST = 'GET_DETAIL_AUTHOR_REQUEST';
export const GET_DETAIL_AUTHOR_SUCCESSED = 'GET_DETAIL_AUTHOR_SUCCESSED';
export const GET_DETAIL_AUTHOR_FAILED = 'GET_DETAIL_AUTHOR_FAILED';

const getAllAuthorsSuccessed = (data) => ({
    type: GET_ALL_AUTHORS_SUCCESSED,
    data
})

const getAllAuthorsFailed = () => ({
    type: GET_ALL_AUTHORS_FAILED
})

const getDetailAuthorSuccessed = (data) => ({
    type: GET_DETAIL_AUTHOR_SUCCESSED,
    data
})

const getDetailAuthorFailed = () => ({
    type: GET_DETAIL_AUTHOR_FAILED,
})

export const getAllAuthors = (dispatch) => () => {
    dispatch({type: GET_ALL_AUTHORS_REQUEST});

    apiGetAllAuthors()
        .then((res) => {
            if(res.status === 200){
                // console.log('authors: ', res.data);
                dispatch(getAllAuthorsSuccessed(res.data.payload))
            } else {
                dispatch(getAllAuthorsFailed());
            }
        })
        .catch((err) => {
            console.log('error: ', err);
            dispatch(getAllAuthorsFailed());
        })
}

export const getDetailAuthor = (dispatch) => (id) => {
    dispatch({type: GET_DETAIL_AUTHOR_REQUEST});

    apiGetDetailAuthor(id)
        .then((res) => {
            if(res.status === 200){
                // console.log('author: ', res.data);
                dispatch(getDetailAuthorSuccessed(res.data.payload));
            } else {
                dispatch(getDetailAuthorFailed());
            }
        })
        .catch((err) => {
            console.log('error: ', err);
            dispatch(getDetailAuthorFailed());
        })
}