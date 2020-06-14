const findIndex = (name, bookmarks) => {
    for(var i = 0; i < bookmarks.length; i++){
        if(bookmarks[i].name === name)
            return i;
    }
}

export const removeItemFromBookmarks = (name, bookmarks) => {
    const index = findIndex(name, bookmarks);
    bookmarks.splice(index, 1);
    
    return bookmarks;
}