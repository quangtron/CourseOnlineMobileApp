import React, { useState, useReducer } from 'react';
import { authenReducer } from '../reducers/authen-reducer';
import { login, checkOwnCourse } from '../actions/authen-action';

const AuthenticationContext = React.createContext();

const initialState = {
    user: {},
    access_token: null,
    message: null,
    checkOwnCourse: {},
    isLogining: false,
    isLogined: false,
    isChecking: false,
    isChecked: false
}

const AuthenticationProvider = props => { 
    const [state, dispatch] = useReducer(authenReducer, initialState);

    return(
        <AuthenticationContext.Provider value={{state, login: login(dispatch), checkOwnCourse: checkOwnCourse(dispatch)}}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export {AuthenticationProvider, AuthenticationContext}