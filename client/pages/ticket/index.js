import React from 'react';
import './style.scss';
import { Button, Qr, Section } from 'components';

const Ticket = () => (
  <Section className="ticket-section" backButton={false}>
    <h1>Valet ticket</h1>
    <p>This ticket is saved, <br className="d-sm-none"/> return to this page at any time.</p>
    <Qr id="0001" />
    <p>
      <Button href="/pick-up">Pick up car</Button>
      <Button href="/request-item">Request item</Button>
    </p>
  </Section>
);

export default Ticket;

