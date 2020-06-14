export const searchCP = (name, main) => {
    let res = [];

    if(name !== ''){
        res = main.data.filter(item => item.title.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    }

    return res;
}

export const searchAuthors = (name, main, authors) => {
    let res = [];

    if(name !== ''){
        const arr = main.data.filter(item => item.title.toLowerCase().indexOf(name.toLowerCase()) !== -1);

        for(let i of arr){
            for(let j of authors){
                if(i.author === j.author){
                    res.push(j);
                }
            }
        }
    }
    
    return res;   
}
