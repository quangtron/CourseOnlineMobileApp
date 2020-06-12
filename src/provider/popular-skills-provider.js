import React, { useState } from 'react';
import { SkillsData } from '../global/dataOffline';

const PopularSkillsContext = React.createContext();

const PopularSkillsProvider = props => {
    const [popularSkills, setPopularSkills] = useState(SkillsData);

    return(
        <PopularSkillsContext.Provider value={{popularSkills, setPopularSkills}}>
            {props.children}
        </PopularSkillsContext.Provider>
    )
}

export {PopularSkillsContext, PopularSkillsProvider}