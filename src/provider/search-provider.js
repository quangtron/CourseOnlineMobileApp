import React, { useState } from 'react';

const SearchContext = React.createContext();

const SearchProvider = props => {
    const [search, setSearch] = useState('');

    return(
        <SearchContext.Provider value={{search, setSearch}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export {SearchContext, SearchProvider}