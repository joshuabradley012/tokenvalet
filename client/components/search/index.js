import React, { useEffect, useState } from 'react';
import './style.scss';
import { objectIncludes } from 'lib';
import { guests } from 'data';
import { Guests } from 'components';

const GuestSearch = () => {
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
    <>
      <input
        type="text"
        placeholder="Name, license, vehicle..."
        value={search}
        onChange={handleChange}
      />
      <Guests data={foundGuests} />
    </>
  );
};

export default GuestSearch;
