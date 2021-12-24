import React from 'react';
import './style.scss';
import {  Button, Section } from 'components';

const Arrival = () => (
  <Section className="arrival-section">
    <h1>Arrival</h1>
    <p>Help your guest check in.</p>
    <form>
      <h2>Guest info</h2>
      <label>Guest type</label>
      <select>
        <option value="">Select an option</option>
        <option value="1">Guest</option>
        <option value="2">Vendor</option>
        <option value="3">Restaurant</option>
        <option value="4">Guest of Guests'</option>
        <option value="5">Return or Repark</option>
        <option value="5">Other</option>
      </select>
      <label>Tag number</label>
      <input type="text" />
      <h3>License plate</h3>
      <label>State</label>
      <input type="text" />
      <label>Number</label>
      <input type="text" />
      <h3>Vehicle</h3>
      <label>Make</label>
      <input type="text" />
      <label>Model</label>
      <input type="text" />
      <label>Color</label>
      <input type="text" />
      <h3>Photos</h3>
      <label>Front</label>
      <input type="file" accept="image/*" capture="environment" />
      <label>Back</label>
      <input type="file" accept="image/*" capture="environment" />
      <label>Drivers' side</label>
      <input type="file" accept="image/*" capture="environment" />
      <label>Passenger's side</label>
      <input type="file" accept="image/*" capture="environment" />
      <label>Notable damage</label>
      <input type="file" accept="image/*" capture="environment" />
      <h3>Notes</h3>
      <label>Where did you park?</label>
      <input type="text" />
      <label>Other</label>
      <textarea />
      <Button href="#">Submit</Button>
    </form>
  </Section>
);

export default Arrival;

