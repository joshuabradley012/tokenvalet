import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import {
  About,
  Arrival,
  ComponentLibrary,
  Departure,
  Finder,
  GuestList,
  Home,
  Login,
  Ticket,
  Typography,
} from 'pages';

const pages = {
  About,
  Arrival,
  ComponentLibrary,
  Departure,
  Finder,
  GuestList,
  Home,
  Login,
  Ticket,
  Typography,
};

const Router = () => (
  <Routes>
    {routes.map(route => {
      let component = null;

      if (pages[route.component]) {
        component = (
          <>
            <Helmet>
              <title>{route.seo?.title}</title>
              <meta name="description"  content={route.seo?.description} />
            </Helmet>
            {pages[route.component]()}
          </>
        );
      }

      return (
        <Route path={route.path} element={component} key={route.path} />
      );
    })}
  </Routes>
);

export default Router;
