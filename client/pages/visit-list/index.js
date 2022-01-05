import React from 'react';
import './style.scss';
import { visits } from 'data';
import { Section, Visits } from 'components';

const VisitsList = () => (
  <Section className="visit-list-section">
    <h1>Visit list</h1>
    <Visits data={visits} />
  </Section>
);

export default VisitsList;
