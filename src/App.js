import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Importing my components
import Issue from "./components/Issue";

import "./App.css";
import IssueList from "./components/IssueList";


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/" className="link">
            Issue List
          </Link>
        </nav>
          <IssueList />
          </Router>
      </div>
        /* <Switch>
          <Route exact path="/">
            <IssueList />
          </Route>

        </Switch>
      </Router> */

  );
}

export default App;