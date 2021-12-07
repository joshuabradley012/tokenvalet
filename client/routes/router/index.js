import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';

const Router = ({ routes }) => (
  <Routes>
    {routes.map(route => {
      const component = (
        <>
          <Helmet>
            <title>{route.seo?.title}</title>
            <meta name="description"  content={route.seo?.description} />
          </Helmet>
          {route.component}
        </>
      );

      return (
        <Route path={route.path} key={route.path} element={component} />
      );
    })}
  </Routes>
);

export default Router;
