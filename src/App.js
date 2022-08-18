import React, { Suspense } from 'react';
import { Link, Route, Switch } from "wouter"

import Header from 'components/Header';

import Login from 'pages/Login';
import SearchResults from 'pages/SearchResults';
import Detail from 'pages/Detail';
import ErrorPage from 'pages/ErrorPage';

import StaticContext from 'context/StaticContext';
import { GifsContextProvider } from 'context/GifsContext';

import './App.css';

const HomePage = React.lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'midudev',
        suscribeteAlCanal: true
      }
    }>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Header />
            <Link to="/">
              <figure className="App-logo">
                <img alt='Giffy logo' src='/logo.png' />
              </figure>
            </Link>
            <GifsContextProvider>
              <Switch>
                <Route
                  component={HomePage}
                  path="/"
                />
                <Route
                  component={SearchResults}
                  path="/search/:keyword/:rating?"
                />
                <Route 
                  component={Detail}
                  path="/gif/:id"
                />
                <Route
                  component={Login}
                  path="/login"
                />
                <Route 
                  component={ErrorPage}
                  path="/:rest*" 
                />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}
