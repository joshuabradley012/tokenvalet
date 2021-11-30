import React, { useState } from 'react';
import './style.scss';
import classNames from 'lib/classnames';
import AppDrawer from 'components/app-drawer';
import Icon from 'components/icon';
import Link from 'components/link';
import Social from 'components/social';

const AppShell = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = () => setDrawerOpen(!isDrawerOpen);

  return (
    <div className="app-shell">
      <div className="app-bar-filler"></div>
      <div className="app-bar">
        <div className="nav container-fluid">
          <a className="toggle" onClick={handleOpenDrawer}>
            <Icon type="hamburger" active={isDrawerOpen} />
          </a>
          <Link href="/">
            <span className="logotype">tokenvalet</span>
          </Link>
        </div>
      </div>
      <div className="app-body">
        <AppDrawer active={isDrawerOpen} />
        {children}
      </div>
      <div className="app-footer">
        <div className="nav container-fluid">
          <span className="item copyright">&copy; tokenvalet</span>
          <Link href="/privacy" className="item link">Privacy Notice</Link>
          <Link href="/terms-of-service" className="item link">Terms of Service</Link>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default AppShell;

