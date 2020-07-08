import React, { useReducer } from 'react';

import { verifyEmail } from '../actions/verify-email-action';
import { verifyEmailReducer } from '../reducers/verify-email-reducer';

const VerifyEmailContext = React.createContext();

const initialState = {
    isVerifying: false,
    isVerifyed: false,
    isActivating: false,
    isActivated: false,
    access_token: null,
}

const VerifyEmailProvider = props => {
    const [state, dispatch] = useReducer(verifyEmailReducer, initialState);
    return(
        <VerifyEmailContext.Provider value={{state, verifyEmail: verifyEmail(dispatch)}}>
            {props.children}
        </VerifyEmailContext.Provider>
    )
}

export {VerifyEmailProvider, VerifyEmailContext}