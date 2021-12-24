import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { classNames } from 'lib';
import { useActivePath } from 'hooks';

const Link = ({ children, className, href, ...rest }) => {
  if (href && typeof href !== 'string') {
    console.log('Links href attribute must be a string.');
    return null;
  }

  const regex = new RegExp('^(https?)?\/\/');
  const isInternal = href ? href.search(regex) === -1 : false;
  const isActivePath = href ? useActivePath(href) : false;
  const activeClassName = isActivePath ? 'active' : '';

  let link;
  if (!href) {
    link = (
      <span
        className={classNames('nolink', activeClassName, className)}
        {...rest}
      >
        {children}
      </span>
    );
  } else if (isInternal) {
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
