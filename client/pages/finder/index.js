import React, { useEffect, useState } from 'react';
import './style.scss';
import { objectIncludes } from 'lib';
import { guests } from 'data';
import { Guests, Section } from 'components';

const Finder = () => {
  const [search, setSearch] = useState('');
  const [foundGuests, setFoundGuests] = useState(guests);

  const handleChange = event => {
    setSearch(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const newFoundGuests = guests.filter(guest => objectIncludes(guest, search, ['lastVisit']));
    setFoundGuests(newFoundGuests);
  }, [search]);

  return (
    <Section className="finder-section">
      <h1>Finder</h1>
      <input
        type="text"
        placeholder="Search for guests"
        value={search}
        onChange={handleChange}
      />
      <Guests data={foundGuests} />
    </Section>
  );
};

export default Finder;

