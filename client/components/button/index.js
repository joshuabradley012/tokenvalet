import React from 'react';
import './style.scss';
import classNames from 'lib/classnames.js';
import Link from 'components/link';

const Button = ({ href, className, children, ...rest }) => (
  <Link
    className={classNames('btn', className)}
    href={href}
    {...rest}
  >
    {children}
  </Link>
);

export default Button;
