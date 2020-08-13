import React, { useState } from 'react';

const SettingCommonContext = React.createContext();

const SettingCommonProvider = props => {
    const [language, setLanguage] = useState(false);

    return(
        <SettingCommonContext.Provider value={{language, setLanguage}}>
            {props.children}
        </SettingCommonContext.Provider>
    )
}

export {SettingCommonContext, SettingCommonProvider}