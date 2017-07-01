// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
// import Landing from './Landing';
import Search from './Search';
//
const Landing = () => <div>landing</div>

      const FourOhFour = () => <h1>404</h1>


const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
)
/*
const MyTitle = function(props) {
  return (
    <div>
      <h1 style={{color: props.color}}>{props.title}</h1>
    </div>
  )
}
*/
render(<App />, document.getElementById('app'));

/*
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
  
}
*/
