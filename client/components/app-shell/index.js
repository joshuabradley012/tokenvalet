import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './style.scss';
import { classNames } from 'lib';
import { useMobile } from 'hooks';
import { routes } from 'routes';
import {
  AppDrawer,
  IconLink,
  Link,
  Logo,
  Social,
} from 'components';

const AppShell = ({ children }) => {
  const isMobile = useMobile();
  const location = useLocation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    if (isMobile && isDrawerOpen) {
      setDrawerOpen(false);
    } else if (!isMobile && !isDrawerOpen) {
      setDrawerOpen(true);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      setDrawerOpen(false);
    }
    window.scrollTo(0, 0);
  }, [location])

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
          <a className="toggle" onClick={handleToggleDrawer}>
            <IconLink type="hamburger" active={isDrawerOpen} />
          </a>
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div className="app-body">
        <AppDrawer active={isDrawerOpen} />
        <main className="app-container">
          <Outlet />
        </main>
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

