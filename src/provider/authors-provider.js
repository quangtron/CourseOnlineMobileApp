import React, { useState } from 'react';
import { AuthorsData } from '../global/dataOffline';

const AuthorsContext = React.createContext();

const AuthorsProvider = props => {
    const [authors, setAuthors] = useState(AuthorsData);

    return(
        <AuthorsContext.Provider value={{authors, setAuthors}}>
            {props.children}
        </AuthorsContext.Provider>
    )
}

export {AuthorsContext, AuthorsProvider}