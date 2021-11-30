import React from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';
import './style.scss';
import classNames from 'lib/classnames';
import clone from 'lib/clone';
import routesMaster from 'pages/routes';
import IconLink from 'components/icon-link';

const routes = clone(routesMaster);
const home = routes.pop();

const AppDrawer = ({ active }) => {
  const isActivePath = path => {;
    const resolved = useResolvedPath(path);
    const match = useMatch({ path: resolved.pathname, end: true });
    return match;
  };

  return (
    <div className={classNames('app-drawer', active ? 'active' : '')}>
      <div className="container-fluid">
        <IconLink
          className={isActivePath(home.path) ? 'active' : null}
          href={home.path}
          key={home.name}
          type={home.icon}
        >
          {home.name}
        </IconLink>
        {routes.map(route => (
          <IconLink
            className={isActivePath(route.path) ? 'active' : null}
            href={route.path}
            key={route.name}
            type={route.icon}
          >
            {route.name}
          </IconLink>
        ))}
      </div>
    </div>
  );
};

export default AppDrawer;
