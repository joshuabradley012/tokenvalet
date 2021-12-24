import React from 'react';
import './style.scss';
import { Section } from 'components';

const Departure = () => (
  <Section className="departure-section">
    <h1>Departure</h1>
    <p>Help your guest check out.</p>
    <label>Search</label>
    <input type="text" />
  </Section>
);

export default Departure;

