import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './page/home/index.js';
import Layout from './component/layout/index.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
