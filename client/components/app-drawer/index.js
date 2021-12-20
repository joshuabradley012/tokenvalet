import React from 'react';
import './style.scss';
import { classNames, clone } from 'lib';
import { routes } from 'routes';
import { IconLink } from 'components';


const AppDrawer = ({ active }) => {
  const activeClassName = active ? 'active' : '';
  const routesClone = clone(routes);
  const home = routesClone.pop();

  return (
    <>
      <div className={classNames('app-drawer-filler', activeClassName)}></div>
      <div className={classNames('app-drawer', activeClassName)}>
        <div className="container-fluid">
          <IconLink
            href={home.path}
            key={home.name}
            type={home.icon}
          >
            {home.name}
          </IconLink>
          {routesClone.map(route => route.inNav ? (
            <IconLink
              href={route.path}
              key={route.name}
              type={route.icon}
            >
              {route.name}
            </IconLink>
          ) : null)}
        </div>
      </div>
    </>
  );
};

export default AppDrawer;

