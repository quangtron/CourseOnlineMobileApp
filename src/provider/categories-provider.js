import React, { useReducer } from "react";
import { categoriesReducer } from "../reducers/categories-reducer";
import { getAllCategories } from "../actions/categories-action";

const CategoriesContext = React.createContext();

const initialState = {
  isGetting: false,
  isGetted: false,
  categories: null,
};

const CategoriesProvider = (props) => {
  const [state, dispatch] = useReducer(categoriesReducer, initialState);

  return (
    <CategoriesContext.Provider
      value={{
        state,
        getAllCategories: getAllCategories(dispatch),
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesProvider, CategoriesContext };
