import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet, Routes, Route, useRoutes } from 'react-router-dom';
import { routes } from 'routes';
import { AppShell } from 'components';
import {
  About,
  Arrival,
  ComponentLibrary,
  Departure,
  Finder,
  GuestDetail,
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
  GuestDetail,
  GuestList,
  Home,
  Login,
  Ticket,
  Typography,
};

const createElement = route => {
  if (route.element && pages[route.element]) {
    return (
      <>
        <Helmet>
          <title>{route.seo?.title}</title>
          <meta name="description"  content={route.seo?.description} />
        </Helmet>
        {React.createElement(pages[route.element])}
      </>
    );
  } else {
    return null;
  }
};

const createRoutes = routes => {
  const result = [];

  for (let route of routes) {
    const formatted = {};

    if (route.path === '') formatted.index = true;
    if (route.path) formatted.path = route.path;

    if (route.children) {
      formatted.element = <Outlet />;
      const children = createRoutes(route.children);
      children.push({ index: true, element: createElement(route) });
      formatted.children = children;
    } else {
      if (route.element) formatted.element = createElement(route);
    }

    result.push(formatted);
  }

  return result;
};

const Router = () => useRoutes([{
  path: '/',
  element: <AppShell />,
  children: createRoutes(routes),
}]);

export default Router;

