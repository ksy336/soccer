import React, {useState, useMemo} from "react";

const ApiContext = React.createContext({
    leagues: [],
    currentLeague: [],
    addLeagues(data) {},
    addCurrentLeague() {}
});

export function LeagueContextProvider({children}) {
    const [leagues, setLeagues] = useState([]);
    const [currentLeague, setCurrentLeague] = useState([]);
    
    function addLeagues(data) {
        setLeagues(data);
    }
    function addCurrLeague(leag) {
        setCurrentLeague(leag)
    }

    // const context = useMemo(() => ({
    //             leagues,
    //             currentLeague,
    //             addLeagues,
    //             addCurrentLeague: addCurrLeague
    //     }),[]);

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const context = {
        leagues,
        currentLeague,
        addLeagues,
        addCurrentLeague: addCurrLeague
    }
    console.log(context, context.leagues);
    return (
        <ApiContext.Provider value={context}>{children}</ApiContext.Provider>
    )
} 
export default ApiContext;