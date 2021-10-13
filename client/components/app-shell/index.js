import React, { useState } from 'react';
import './style.scss';
import Icon from '../icon';

const AppShell = ({ children }) => {
  const handleOpenDrawer = () => {};

  return (
    <div className="app-shell">
      <div className="app-bar">
        <a onClick={handleOpenDrawer}>
          <Icon type="hamburger" />
        </a>
      </div>
      <div className="app-drawer">
      </div>
      <div className="app-body">
        {children}
      </div>
    </div>
  );
};

export default AppShell;

