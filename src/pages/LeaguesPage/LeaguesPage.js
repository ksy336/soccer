import React, {useCallback, useEffect, useState, useContext} from 'react';
import Header from '../../UI/Header';
import InputSearch from "../../UI/InputSearch";
import LeagueItem from "./components/LeagueItem";
import Pagination from "../../UI/Pagination";
import ApiContext from "../../store/api-context";
import '../../sass/App.scss';


function LeaguesPage() {
    const [leagues, setLeagues] = useState([]);
    const [errorText, setErrorText] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [leaguesPerPage] = useState(9);

    // Get  current league
    const indexOfLastLeague = currentPage * leaguesPerPage;
    const indexOfFirstLeague = indexOfLastLeague - leaguesPerPage;
    const currentLeagues = leagues.slice(indexOfFirstLeague, indexOfLastLeague); // 0-10

    const apiCtx = useContext(ApiContext);


    // Change page
    const paginate = (number) => {
        setCurrentPage(number);
    }
    console.log(indexOfLastLeague, indexOfFirstLeague,currentLeagues );

    // получать данные от Football API
    const fetchAllLeaguesData = useCallback(async() => {
        try {
            setErrorText(null);
            setLoading(true);
            const response = await fetch("http://api.football-data.org/v2/competitions/", {
                method: "GET",
                headers: {
                    "X-Auth-Token": "71df5fa243ea418cabf6302d3d66221d"
                }

            });
            console.log(response, response.status);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            console.log(data.competitions);
            setLoading(false);
            const loadedLeagues = data.competitions.map(leagueItem => ({
                id: leagueItem.id,
                name: leagueItem.name,
                country: leagueItem.area.name,
            }));

            setLeagues(loadedLeagues);
            apiCtx.addLeagues(loadedLeagues);
        }
        catch(error) {
            setErrorText(error.message);
        }
    }, []);

    useEffect(() => {
        fetchAllLeaguesData();
    }, [fetchAllLeaguesData])

    if (loading ){
        return <h2>Loading...</h2>
    }

  return (
      <>
      <Header />
      <InputSearch />
      <section className="leagues">
          <div className="wrapper leagues__wrapper">
              <div className="layout-3-column leagues-container">
                {currentLeagues.map(competition => <LeagueItem
                  key={competition.id}
                  name={competition.name}
                  country={competition.country}
                  id={competition.id}
              />)
                }
              </div>
          </div>
          <Pagination paginate={paginate} leaguesPerPage={currentLeagues.length} totalLeagues={leagues.length} />
      </section>
          {errorText && <p>{errorText}</p>}
      </>
  )
}
export default LeaguesPage;
