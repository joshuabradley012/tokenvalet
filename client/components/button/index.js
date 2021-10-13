import React from 'react';
import classNames from '../../utils/classnames.js';
import './style.scss';
import Link from '../link';

const Button = ({ href, className, children, ...rest }) => (
  <Link
    className={classNames("btn", className)}
    href={href} {...rest}
  >
    {children}
  </Link>
);

export default Button;
