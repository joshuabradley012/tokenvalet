import React from 'react';
import './style.scss';
import classNames from 'lib/classnames';
import clone from 'lib/clone';
import { useActivePath } from 'hooks';
import routesMaster from 'pages/routes';
import IconLink from 'components/icon-link';

const routes = clone(routesMaster);
const home = routes.pop();

const AppDrawer = ({ active, onClick }) => {
  const activeClassName = active ? 'active' : '';

  return (
    <>
      <div className={classNames('app-drawer-filler', activeClassName)}></div>
      <div className={classNames('app-drawer', activeClassName)}>
        <div className="container-fluid">
          <IconLink
            className={useActivePath(home.path) ? 'active' : null}
            href={home.path}
            onClick={onClick}
            key={home.name}
            type={home.icon}
          >
            {home.name}
          </IconLink>
          {routes.map(route => (
            <IconLink
              className={useActivePath(route.path) ? 'active' : null}
              href={route.path}
              onClick={onClick}
              key={route.name}
              type={route.icon}
            >
              {route.name}
            </IconLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppDrawer;

