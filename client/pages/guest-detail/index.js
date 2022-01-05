import React from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import { guests, visits } from 'data';
import {
  IconLink,
  Section,
  Visits
} from 'components';

const GuestDetail = () => {
  const { guestId } = useParams();
  const guest = guests.find(guest => guest.id === guestId);

  return (
    <Section className="guest-detail-section">
      <div className="guest-detail card">
        <div className="header space-between">
          <h1 className="name">{guest.name}</h1>
          <div className="status">
            <span className="text">Inactive</span>
            <span className="indicator inactive"></span>
          </div>
        </div>
        <p className="vehicle">{guest.car?.color} {guest.car?.make} {guest.car?.model}</p>
        <p className="license">{guest.license}</p>
        <p className="last-visit space-between align-items-end">
          <span>Last visit - {guest.lastVisit}</span>
          <IconLink type="edit" className="left">Edit</IconLink>
        </p>
      </div>
      <h2>Visits</h2>
      <Visits data={visits} />
    </Section>
  );
};

export default GuestDetail;

