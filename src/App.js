import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './page/home/index.js';
import Login from './page/login/index.js';
import Layout from './component/layout/index.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={(props) => (
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product" component={Home} />
                <Route exact path="/product-category" component={Home} />
              </Switch>
          </Layout>
          )} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
