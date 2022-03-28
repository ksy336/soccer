import React from 'react';
import Header from '../../UI/Header';
import '../../sass/App.scss';
import InputSearch from "../../UI/InputSearch";
import Card from "./components/Card";

function LeaguesPage({data}) {
  return (
      <>
      <Header />
      <InputSearch />
      <section className="leagues">
          <div className="wrapper leagues__wrapper">
              <div className="layout-3-column leagues-container">
          {data.map(competition => <Card
                  key={competition.id}
                  name={competition.name}
                  country={competition.area.name}
              />)
          }
              </div>
          </div>
      </section>
      </>
  )
}
export default LeaguesPage;
