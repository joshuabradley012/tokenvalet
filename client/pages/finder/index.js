import React, { useEffect, useState } from 'react';
import './style.scss';
import { objectIncludes } from 'lib';
import { guests } from 'data';
import { GuestSearch, Section } from 'components';

const Finder = () => {
  return (
    <Section className="finder-section">
      <h1>Finder</h1>
      <GuestSearch />
    </Section>
  );
};

export default Finder;

