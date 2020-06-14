import React, { useState } from 'react';

import { BookmarksData } from '../global/dataOffline';

const BookmarksContext = React.createContext();

const BookmarksProvider = props => {
    const [bookmarks, setBookmarks] = useState(BookmarksData);

    return(
        <BookmarksContext.Provider value={{bookmarks, setBookmarks}}>
            {props.children}
        </BookmarksContext.Provider>
    )
}

export {BookmarksContext, BookmarksProvider}