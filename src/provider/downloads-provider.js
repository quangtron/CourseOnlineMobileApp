import React, { useState } from 'react';

import { DownloadsData } from '../global/dataOffline';

const DownloadsContext = React.createContext();

const DownloadsProvider = props => {
    const [downloads, setDownloads] = useState(DownloadsData);

    return(
        <DownloadsContext.Provider value={{downloads, setDownloads}}>
            {props.children}
        </DownloadsContext.Provider>
    )
}

export {DownloadsContext, DownloadsProvider}