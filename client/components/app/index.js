import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.scss';
import Pages from 'pages';
import AppShell from 'components/app-shell';

const App = () => {
  return (
    <Router>
      <AppShell>
        <Pages />
      </AppShell>
    </Router>
  );
};

export default App;

