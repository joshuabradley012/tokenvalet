import React, { useEffect, useState } from 'react';
import './style.scss';
import { classNames } from 'lib';
import { useMobile } from 'hooks';
import { routes } from 'routes';
import {
  AppDrawer,
  Icon,
  Link,
  Logo,
  Social,
} from 'components';

const AppShell = ({ children }) => {
  const isMobile = useMobile();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleCloseDrawerOnMobileClick = () => {
    if (isMobile) setDrawerOpen(false);
  };

  const handleOpenDrawer = () => setDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    if (isMobile && isDrawerOpen) {
      setDrawerOpen(false);
    } else if (!isMobile && !isDrawerOpen) {
      setDrawerOpen(true);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && isDrawerOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobile, isDrawerOpen]);

  return (
    <div className="app-shell">
      <div className="app-bar-filler"></div>
      <div className={classNames('app-bar', isDrawerOpen ? '' : 'active')}>
        <div className="nav container-fluid">
          <a className="toggle" onClick={handleOpenDrawer}>
            <Icon type="hamburger" active={isDrawerOpen} />
          </a>
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div className="app-body">
        <AppDrawer
          active={isDrawerOpen}
          onClick={handleCloseDrawerOnMobileClick}
        />
        <div className="app-container">
          {children}
        </div>
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

