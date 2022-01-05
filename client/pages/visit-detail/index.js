import React from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import { guests, visits } from 'data';
import { IconLink, Section } from 'components';

const VisitsDetail = () => {
  const { visitId } = useParams();
  const visit = visits.find(visit => visit.id === visitId);
  const guest = guests.find(guest => guest.id === visit.guestId);

  return (
    <Section className="visit-detail-section">
      <div className="visit-detail card">
        <div className="header space-between">
          <h1 className="name">{visit.name}</h1>
          <span className="date">{visit.date}</span>
        </div>
        <p className="guest-name">{guest.name}</p>
        <p className="vehicle">{guest.car?.color} {guest.car?.make} {guest.car?.model}</p>
        <p className="license space-between align-items-end">
          <span>{guest.license}</span>
          <IconLink type="edit" className="left">Edit</IconLink>
        </p>
      </div>
    </Section>
  );
};

export default VisitsDetail;
