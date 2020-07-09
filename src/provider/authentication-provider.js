import React, { useState, useReducer } from 'react';
import { authenReducer } from '../reducers/authen-reducer';
import { login } from '../actions/authen-action';

const AuthenticationContext = React.createContext();

const initialState = {
    user: {},
    access_token: null,
    message: null,
    isLogining: false,
    isLogined: false,
}

const AuthenticationProvider = props => { 
    const [state, dispatch] = useReducer(authenReducer, initialState);

    return(
        <AuthenticationContext.Provider value={{state, login: login(dispatch)}}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export {AuthenticationProvider, AuthenticationContext}