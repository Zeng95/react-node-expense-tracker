import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Tags from 'views/Tags'
import Details from 'views/Details'
import Statistics from 'views/Statistics'
import NoMatch from 'views/NoMatch'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/details" />

        <Route path="/tags">
          <Tags />
        </Route>

        <Route path="/details">
          <Details />
        </Route>

        <Route path="/statistics">
          <Statistics />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
