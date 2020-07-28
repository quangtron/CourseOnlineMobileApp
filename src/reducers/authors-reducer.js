import {
  GET_ALL_AUTHORS_REQUEST,
  GET_ALL_AUTHORS_SUCCESSED,
  GET_ALL_AUTHORS_FAILED,
  GET_DETAIL_AUTHOR_REQUEST,
  GET_DETAIL_AUTHOR_SUCCESSED,
  GET_DETAIL_AUTHOR_FAILED,
} from "../actions/authors-action";

export const authorsReducer = (preState, action) => {
  switch (action.type) {
    case GET_ALL_AUTHORS_REQUEST:
      return { ...preState, isGettingAllAuthors: true };
    case GET_ALL_AUTHORS_SUCCESSED:
      return {
        ...preState,
        isGettingAllAuthors: false,
        isGettedAllAuthors: true,
        authors: action.data
      };
    case GET_ALL_AUTHORS_FAILED:
      return {
        ...preState,
        isGettingAllAuthors: false,
        isGettedAllAuthors: false,
      };
    case GET_DETAIL_AUTHOR_REQUEST:
      return { ...preState, isGettingDetailAuthor: true };
    case GET_DETAIL_AUTHOR_SUCCESSED:
      return {
        ...preState,
        isGettingDetailAuthor: false,
        isGettedDetailAuthor: true,
        author: action.data
      };
    case GET_DETAIL_AUTHOR_FAILED:
      return {
        ...preState,
        isGettingDetailAuthor: false,
        isGettedDetailAuthor: false,
      };
    default:
      // throw new Error();
      return { ...preState };
  }
};
