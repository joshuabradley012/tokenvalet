import React from 'react';
import './style.scss';
import { routes } from 'routes';
import {
  Icon,
  Link,
} from 'components';

const Dashboard = ({ links }) => (
  <div className="dashboard row gx-4 gy-4">
    {links.map(link => {
      const route = routes.find(route => route.path === link);

      if (route) {
        return (
          <div className="col-6" key={route.path}>
            <Link className="item" href={route.path}>
              <div className="inner">
                <Icon type={route.icon} />
                <span>{route.name}</span>
              </div>
            </Link>
          </div>
        );
      }
    })}
  </div>
);

export default Dashboard;
