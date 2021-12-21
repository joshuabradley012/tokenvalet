import React from 'react';
import './style.scss';
import { classNames } from 'lib';
import { routes } from 'routes';
import { IconLink } from 'components';


const AppDrawer = ({ active }) => {
  const activeClassName = active ? 'active' : '';

  return (
    <>
      <div className={classNames('app-drawer-filler', activeClassName)}></div>
      <div className={classNames('app-drawer', activeClassName)}>
        <div className="container-fluid">
          {routes.map(route => route.inNav ? (
            <IconLink
              href={`/${route.path}`}
              type={route.icon}
              key={route.name}
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

