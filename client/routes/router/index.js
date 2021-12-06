import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = ({ routes }) => (
  <Routes>
    {routes.map(route => (
      <Route path={route.path} key={route.name} element={route.component} />
    ))}
  </Routes>
);

export default Router;
