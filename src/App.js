import React from 'react';
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Recommended from './Recommended';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">

      <Router>

        {/* Header */}
        <Header />

        <Switch>
          <Route path="/search">
            <div className="app__page">
              {/* SideBar */}
              <Sidebar />

              {/* Search videos */}

            </div>
          </Route>

          <Route path="/">
            <div className="app__page">
              {/* SideBar */}
              <Sidebar />

              {/* Recommended videos */}
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>








    </div>
  );
}

export default App;
