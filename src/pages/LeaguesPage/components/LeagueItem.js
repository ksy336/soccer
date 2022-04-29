import React, {useContext} from "react";
import {Link} from "react-router-dom";
import ApiContext from "../../../store/api-context";
import "../../../sass/App.scss";

function LeagueItem({name, country, id}) {
    const apiCtx = useContext(ApiContext);
    const filteredLeagues = apiCtx.leagues.filter(league => league.id === id);
    console.log(filteredLeagues);

    const handleClick = () => {
         apiCtx.addCurrentLeague(filteredLeagues);
    }
    return (
        <article className="league block-shadowed">
            <Link className="link" to="/calendar-leagues">
                <div
                    className="league__content"
                    onClick={handleClick}
                    role="button"
                    tabIndex="0"
                    onKeyPress={() =>{console.log()}}
                >
                    <h3 className="league__name">{name}</h3>
                    <h4>{country}</h4>
                </div>
            </Link>
        </article>
    )
}
export default LeagueItem;