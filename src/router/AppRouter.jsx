import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Cinema from '../pages/Cinema'
import Classification from '../pages/Classification'
import Mine from '../pages/Mine'
import Ticket from '../pages/Ticket'
import FooterBar from '../components/FooterBar'

export default class AppRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/classification" component={Classification} />
          <Route exact path="/ticket" component={Ticket} />
          <Route exact path="/cinema" component={Cinema} />
          <Route exact path="/mine" component={Mine} />
        </Switch>
        <FooterBar/>
      </HashRouter>
    )
  }
}