import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect, Redirect, browserHistory } from 'react-router'
import './css/index.css'
import App from './components/App'
import Home from './components/Home'
import Gallery from './components/Gallery'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="home"/>
      <Route path="/home" component={Home}/>
      <Route path="/gallery" component={Gallery}/>
      <Redirect from="*" to="404"/>
    </Route>
  </Router>,
  document.getElementById('root')
)
