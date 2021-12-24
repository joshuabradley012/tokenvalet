import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { Icon } from 'components';

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);;

  return (
    <Icon type="arrow-left" className="back-button" onClick={handleClick} />
  );
};

export default BackButton;
