import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';
import { routes, Router } from 'routes';
import { AppShell } from 'components';

const App = () => {
  return (
    <BrowserRouter>
      <AppShell routes={routes}>
        <Router routes={routes} />
      </AppShell>
    </BrowserRouter>
  );
};

export default App;

