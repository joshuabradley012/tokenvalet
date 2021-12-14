import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';
import { Router } from 'routes';
import { AppShell } from 'components';

const App = () => {
  return (
    <BrowserRouter>
      <AppShell>
        <Router />
      </AppShell>
    </BrowserRouter>
  );
};

export default App;

