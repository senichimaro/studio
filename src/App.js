import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// import { appendScript } from './UI/utils/ScriptToAppend'

import Nav from './UI/components/Nav'

import HomePage from './UI/pages/HomePage'
import AboutPage from './UI/pages/AboutPage'
import PortfolioPage from './UI/pages/PortfolioPage'
import ContactPage from './UI/pages/ContactPage'


function App() {

  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Nav visibility={true} />
          <HomePage />
        </Route>

        <Route exact path="/about">
          <Nav visibility={true} />
          <AboutPage />
        </Route>

        <Route exact path="/portfolio">
          <Nav visibility={true} />
          <PortfolioPage />
        </Route>

        <Route exact path="/contact">
          <Nav visibility={true} />
          <ContactPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
