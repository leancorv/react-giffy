import React, { Suspense } from 'react';
import './App.css';
import { Link, Route } from "wouter"
import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

const HomePage = React.lazy(() => import('./pages/home'))

function App() {
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
            <Link to="/">
              <figure className="App-logo">
                <img alt='Giffy logo' src='/logo.png' />
              </figure>
            </Link>
            <GifsContextProvider>
              <Route
                component={HomePage}
                path="/"
              />
              <Route
                component={SearchResults}
                path="/search/:keyword"
              />
              <Route 
                component={Detail}
                path="/gif/:id"
              />            
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
