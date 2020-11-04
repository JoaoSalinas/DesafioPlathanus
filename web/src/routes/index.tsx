import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Search from '../pages/Search';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/search" component={Search} />
  </Switch>
);

export default Routes;
