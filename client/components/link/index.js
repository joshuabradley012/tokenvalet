import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { classNames } from 'lib';
import { useActivePath } from 'hooks';

const Link = ({ children, className, href, ...rest }) => {
  const regex = new RegExp('^(https?)?\/\/');
  const isInternal = href.search(regex) === -1;
  const isActivePath = useActivePath(href);
  const activeClassName = isActivePath ? 'active' : '';

  let link;
  if (isInternal) {
    link = (
      <RouterLink
        to={href}
        className={classNames('internal', activeClassName, className)}
        {...rest}
      >
        {children}
      </RouterLink>
    );
  } else {
    link = (
      <a
        href={href}
        className={classNames('external', activeClassName, className)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return link;
};

export default Link;
