import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './page/home/index.js';
import Login from './page/login/index.js';
import ErrorPage from './page/error/index.js';
import UserList from './page/user/index.js';
import Layout from './component/layout/index.js';

function App() {
  let LayoutRouter =(
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Home} />
        <Route path="/product-category" component={Home} />
        <Route path="/user/index" component={UserList} />
        <Redirect exact from="/user" to="/user/index" />
        <Route component={ErrorPage} />
      </Switch>
    </Layout>
  )

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={(props) => LayoutRouter} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
