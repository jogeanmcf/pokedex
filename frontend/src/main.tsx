import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { pokeTeamAPI } from './api/pokemonAPI'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import AppRouter from './routes';
// import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ApiProvider api={pokeTeamAPI}>
          <AppRouter />
      </ApiProvider>
  </React.StrictMode>,
)
