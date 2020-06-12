import React, { useState } from 'react';

const AuthenticationContext = React.createContext();

const AuthenticationProvider = props => {
    const [authentication, setAuthentication] = useState(null);

    return(
        <AuthenticationContext.Provider value={{authentication, setAuthentication}}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export {AuthenticationProvider, AuthenticationContext}