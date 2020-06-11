import React, { useState } from 'react';
import { MainData } from '../global/dataOffline';

const MainContext = React.createContext();

const MainProvider = props => {
    const [main, setMain] = useState(MainData);

    return(
        <MainContext.Provider value={{main, setMain}}>
            {props.children}
        </MainContext.Provider>
    )
}

export {MainProvider, MainContext}