import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Ui from '../ui';
import Page from '../page';

const Routes = () => (
  <Switch>
    <Route path="/page">
      <Page />
    </Route>
    <Route path="/">
      <Ui />
    </Route>
  </Switch>
);

export default Routes;
