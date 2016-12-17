import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, Redirect, browserHistory } from 'react-router';
import './css/index.css';
import App from './components/App';
import Home from './components/Home';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="home"/>
      <Route path="/home" component={Home}/>
      <Redirect from="*" to="404"/>
    </Route>
  </Router>,
  document.getElementById('root')
);
