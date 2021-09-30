import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ href, children, ...rest }) => {
  const regex = new RegExp('^(https?)?\/\/');
  const isInternal = href.search(regex) === -1;

  let button;
  if (isInternal) {
    button = <RouterLink to={href} {...rest}>{children}</RouterLink>;
  } else {
    button = <a href={href} {...rest}>{children}</a>;
  }

  return button;
};

export default Link;
