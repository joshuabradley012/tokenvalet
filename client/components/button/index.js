import React from 'react';
import './style.scss';

const Button = ({ href, children }) => {
  return (
    <a className="btn" href={href}>{children}</a>
  );
};

export default Button;
