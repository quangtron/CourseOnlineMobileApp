import React, { useReducer } from "react";

import { authorsReducer } from "../reducers/authors-reducer";
import { getAllAuthors, getDetailAuthor } from "../actions/authors-action";

const AuthorsContext = React.createContext();

const initialState = {
  isGettingAllAuthors: false,
  isGettedAllAuthors: false,
  isGettingDetailAuthor: false,
  isGettedDetailAuthor: false,
  authors: [],
  author: null,
};

const AuthorsProvider = (props) => {
  const [state, dispatch] = useReducer(authorsReducer, initialState);

  return (
    <AuthorsContext.Provider
      value={{
        state,
        getAllAuthors: getAllAuthors(dispatch),
        getDetailAuthor: getDetailAuthor(dispatch),
      }}
    >
      {props.children}
    </AuthorsContext.Provider>
  );
};

export { AuthorsContext, AuthorsProvider };
