import React from 'react';
import './style.scss';
import { guests } from 'data';
import {  Guests, Section } from 'components';

const GuestList = () => (
  <Section className="guest-list-section">
    <h1>Guest list</h1>
    <Guests guests={guests} />
  </Section>
);

export default GuestList;

