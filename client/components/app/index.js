import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.scss';
import Routes from '../routes';
import AppShell from '../app-shell';

const App = () => {
  return (
    <Router>
      <AppShell>
        <Routes />
      </AppShell>
    </Router>
  );
};

export default App;

