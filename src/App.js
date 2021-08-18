

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// import { nav } from './UI/data/data'


import HomePage from './UI/pages/HomePage'
import AboutPage from './UI/pages/AboutPage'
import Nav from './UI/components/Nav'



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

      </Switch>
    </Router>
  );
}

export default App;
