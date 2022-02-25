import React from 'react';
import './style.scss';
import { GuestSearch, Section } from 'components';

const Departure = () => (
  <Section className="departure-section">
    <h1>Departure</h1>
    <p>Help your guest check out.</p>
    <GuestSearch />
  </Section>
);

export default Departure;

