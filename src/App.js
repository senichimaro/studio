import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


import HomePage from './UI/pages/HomePage'



function App() {
  
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <HomePage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
