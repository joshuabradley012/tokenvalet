import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from '../page';
import Ui from '../ui';
import Qr from '../qr';

const Routes = () => (
  <Switch>
    <Route path="/page">
      <Page />
    </Route>
    <Route path="/ui">
      <Ui />
    </Route>
    <Route path="/">
      <Qr />
    </Route>
  </Switch>
);

export default Routes;

