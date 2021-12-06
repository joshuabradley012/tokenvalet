import React from 'react';
import './style.scss';
import { classNames, clone } from 'lib';
import { IconLink } from 'components';


const AppDrawer = ({ active, onClick, routes }) => {
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
            onClick={onClick}
            key={home.name}
            type={home.icon}
          >
            {home.name}
          </IconLink>
          {routesClone.map(route => (
            <IconLink
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

