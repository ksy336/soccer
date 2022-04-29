import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {LeagueContextProvider} from "./store/api-context";
import './sass/App.scss';

ReactDOM.render(
  <React.StrictMode>
      <LeagueContextProvider>
          <App />
      </LeagueContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
