// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';

import AsyncRoute from './AsyncRoute';
import store from './store';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () =>
  <div className="app">
    <Provider store={store}>
      <Switch>
        <Route
          exact
          path="/"
          component={(
            props // {//component={Landing} />}
          ) => <AsyncRoute props={props} loadingPromise={import('./Landing.jsx')} />}
        />
        <Route
          path="/search"
          component={(
            props // {//<Search shows={preload.shows} {...props} />} />}
          ) =>
            <AsyncRoute
              props={Object.assign({ shows: preload.shows }, props)}
              loadingPromise={import('./Search.jsx')}
            />}
        />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => {
            const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
            return (
              // {//<Details show={selectedShow} {...props} />;}
              <AsyncRoute
                props={Object.assign({ show: selectedShow, match: {} }, props)}
                loadingPromise={import('./Details.jsx')}
              />
            );
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </Provider>;
  </div>;

/*
const App = () => (<div classNamstore={store}>
    <div className="app">
      <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={import('./Landing')} />} />
      <Route
        path="/search"
        component={props => (
          <AsyncRoute loadingPromise={import('./Search')} props={Object.assign({ shows: preload.shows }, props)} />
        )}
      />
      <Route
        path="/details/:id"
        component={(props: { match: Match }) => {
          const selectedShow = preload.shows.find((show: Show) => props.match.params.id === show.imdbID);
          return (
            <AsyncRoute
              loadingPromise={import('./Details')}
              props={Object.assign({ show: selectedShow, match: {} }, props)}
            />
          );
        }}
      />
    </div>
  </Provider>
);
*/

export default App;
