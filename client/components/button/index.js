import React from 'react';
import './style.scss';
import { classNames } from 'lib';
import { Link } from 'components';

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
