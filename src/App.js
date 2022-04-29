import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import {IntlProvider} from "react-intl";
import LeaguesPage from './pages/LeaguesPage/LeaguesPage';
import TeamsPage from './pages/TeamsPage/TeamsPage';
import CalendarLeaguesPage from "./pages/CalendarLeaguesPage/CalendarLeaguesPage";
import './sass/App.scss';

function App() {

  return (
      <IntlProvider messages={{}} locale="ru" defaultLocale="ru">
          <BrowserRouter>
              {/* <Header /> */}
              <Routes>
                  <Route path="/" element={<LeaguesPage  />} />
                  <Route path="/teams" element={<TeamsPage />} />
                  <Route path="/calendar-leagues" element={<CalendarLeaguesPage/>} />
              </Routes>
          </BrowserRouter>
      </IntlProvider>

  );
}

export default App;
