import React, { useReducer } from 'react';
import { registerReducer } from '../reducers/register-reducer';
import { register } from '../actions/register-action';

const RegisterContext = React.createContext();

const initialState = {
    isRegistering: false,
    isRegistered: false,
}

const RegisterProvider = props => {
    const [state, dispatch] = useReducer(registerReducer, initialState);

    return(
        <RegisterContext.Provider value={{state, register: register(dispatch)}}>
            {props.children}
        </RegisterContext.Provider>
    )
}

export {RegisterProvider, RegisterContext}