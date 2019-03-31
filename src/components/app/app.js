import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withBookstoreService } from '../hoc';
import { HomePage, CartPage } from '../pages';
import Header from '../header';

import './app.css';

const App = () => (
  <div className="app">
    <Header numItems={5} total={210} />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
  </div>
);

export default withBookstoreService()(App);
