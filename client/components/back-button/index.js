import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { IconLink } from 'components';

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <IconLink type="arrow-left" className="back-button" onClick={handleClick} />
  );
};

export default BackButton;
