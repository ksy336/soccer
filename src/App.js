import React from 'react';
import './sass/App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import {IntlProvider} from "react-intl";
import LeaguesPage from './pages/LeaguesPage/LeaguesPage';
import TeamsPage from './pages/TeamsPage';

const competitions = [
    {
        id: 2006,
        area:{
            "id": 2001,
            name: "Africa",
            "countryCode": "AFR",
            "ensignUrl": null
        },
        name: "WC Qualification CAF",
        code: "QCAF",
        emblemUrl: null,
        plan: "TIER_FOUR",
        currentSeason:{
            id: 555,
            startDate: "2019-09-04",
            endDate: "2021-11-16",
            currentMatchday: 6,
            winner: null
        },
        numberOfAvailableSeasons: 2,
        lastUpdated: "2022-03-13T18:51:44Z"
    },
    {
        id: 2023,
        area:{
            id: 2011,
            name: "Argentina",
            countryCode: "ARG",
            ensignUrl: null
        },
        name: "Primera B Nacional",
        code: null,
        emblemUrl: null,
        plan: "TIER_FOUR",
        currentSeason:{
            id: 716,
            startDate: "2021-03-13",
            endDate: "2021-12-26",
            currentMatchday: 17,
            winner: null
        },
        numberOfAvailableSeasons: 5,
        lastUpdated: "2021-04-17T11:21:38Z"
    },
    {
        id: 2024,
        area:{
            id: 2011,
            name: "Argentina",
            countryCode: "ARG",
            ensignUrl: null
        },
        name: "Liga Profesional",
        code: "ASL",
        emblemUrl: "https://crests.football-data.org/LPDF.svg",
        plan: "TIER_TWO",
        currentSeason:{
            id: 715,
            startDate: "2021-07-18",
            endDate: "2021-12-12",
            currentMatchday: 25,
            winner: null
        },
        numberOfAvailableSeasons: 4,
        lastUpdated: "2021-05-28T18:02:40Z"
    },
    {
        "id": 2025,
        "area":{
            "id": 2011,
            "name": "Argentina",
            "countryCode": "ARG",
            "ensignUrl": null
        },
        "name": "Supercopa Argentina",
        "code": null,
        "emblemUrl": null,
        "plan": "TIER_FOUR",
        "currentSeason":{
            "id": 430,
            "startDate": "2019-04-04",
            "endDate": "2019-04-04",
            "currentMatchday": null,
            "winner": null
        },
        "numberOfAvailableSeasons": 2,
        "lastUpdated": "2019-05-03T05:08:18Z"
    },
    {
        "id": 2149,
        "area":{
            "id": 2011,
            "name": "Argentina",
            "countryCode": "ARG",
            "ensignUrl": null
        },
        "name": "Copa Liga Profesional",
        "code": null,
        "emblemUrl": null,
        "plan": "TIER_FOUR",
        "currentSeason":{
            "id": 717,
            "startDate": "2021-02-12",
            "endDate": "2021-05-30",
            "currentMatchday": 13,
            "winner": null
        },
        "numberOfAvailableSeasons": 2,
        "lastUpdated": "2021-04-17T06:00:34Z"
    },
    {
        "id": 2147,
        "area":{
            "id": 2014,
            "name": "Asia",
            "countryCode": "ASI",
            "ensignUrl": null
        },
        "name": "WC Qualification AFC",
        "code": "QAFC",
        "emblemUrl": null,
        "plan": "TIER_FOUR",
        "currentSeason":{
            "id": 465,
            "startDate": "2019-06-06",
            "endDate": "2021-11-16",
            "currentMatchday": 10,
            "winner": null
        },
        "numberOfAvailableSeasons": 2,
        "lastUpdated": "2021-11-11T10:31:11Z"
    },
    {
        "id": 2008,
        "area":{
            "id": 2015,
            "name": "Australia",
            "countryCode": "AUS",
            "ensignUrl": null
        },
        "name": "A League",
        "code": "AAL",
        "emblemUrl": null,
        "plan": "TIER_TWO",
        "currentSeason":{
            "id": 768,
            "startDate": "2021-11-19",
            "endDate": "2022-06-10",
            "currentMatchday": 25,
            "winner": null
        },
        "numberOfAvailableSeasons": 5,
        "lastUpdated": "2021-04-17T07:19:35Z"
    },
    {
        "id": 2026,
        "area":{
            "id": 2015,
            "name": "Australia",
            "countryCode": "AUS",
            "ensignUrl": null
        },
        "name": "FFA Cup",
        "code": null,
        "emblemUrl": null,
        "plan": "TIER_FOUR",
        "currentSeason":{
            "id": 592,
            "startDate": "2020-02-19",
            "endDate": "2020-10-28",
            "currentMatchday": null,
            "winner": null
        },
        "numberOfAvailableSeasons": 3,
        "lastUpdated": "2019-10-23T23:59:22Z"
    },
    {
        "id": 2020,
        "area": {
            "id": 2016,
            "name": "Austria",
            "countryCode": "AUT",
            "ensignUrl": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg"
        },
        "name": "Erste Liga",
        "code": null,
        "emblemUrl": null,
        "plan": "TIER_FOUR",
        "currentSeason": {
            "id": 626,
            "startDate": "2020-09-11",
            "endDate": "2021-05-21",
            "currentMatchday": 30,
            "winner": null
        },
        "numberOfAvailableSeasons": 4,
        "lastUpdated": "2021-04-17T11:29:52Z"
    }
];

function App() {
   
  return (
      <IntlProvider messages={{}} locale="ru" defaultLocale="ru">
          <BrowserRouter>
              {/* <Header /> */}
              <Routes>
                  <Route path="/" element={<LeaguesPage data={competitions} />} />
                  <Route path="/teams" element={<TeamsPage />} />
              </Routes>
          </BrowserRouter>
      </IntlProvider>

  );
}
export default App;
