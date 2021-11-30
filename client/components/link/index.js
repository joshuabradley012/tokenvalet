import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ children, href, ...rest }) => {
  const regex = new RegExp('^(https?)?\/\/');
  const isInternal = href.search(regex) === -1;

  let link;
  if (isInternal) {
    link = <RouterLink to={href} {...rest}>{children}</RouterLink>;
  } else {
    link = <a href={href} {...rest}>{children}</a>;
  }

  return link;
};

export default Link;
