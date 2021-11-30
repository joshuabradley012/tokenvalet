import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from 'pages/routes';

const Pages = () => (
  <Routes>
    {routes.map(route => (
      <Route path={route.path} key={route.name} element={route.component} />
    ))}
  </Routes>
);

export default Pages;

