// @flow

import React from 'react';
import { render } from 'react-dom';

/*
import { BrowserRouter } from 'react-router-dom';
import App from './App';

*/

/*
const renderApp = () => {
  render(
    <BrowserRouter key={Math.random()}>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
};

renderApp();

*/

const MyTitle = function(props) {
  return (
    <div>
      <h1 style={{color: props.color}}>{props.title}</h1>
    </div>
  )
}

const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="Game of Thrones" color="yellowgreen" />
      <MyTitle title="Stranger Things" color="greenyellow" />
      <MyTitle title="Rick and Morty" color="limegreen" />
      <MyTitle title="House of Cards" color="peru" />
    </div>
  )
}

render(
  React.createElement(MyFirstComponent), document.getElementById('app'));
  
/*
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
  
}
*/
