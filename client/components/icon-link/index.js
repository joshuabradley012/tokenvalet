import React, { useState } from 'react';
import './style.scss';
import { classNames } from 'lib';
import { Icon, Link } from 'components';

const IconLink = ({ children, className, href, type, ...rest }) => {
  const [isActive, setActive] = useState(false);

  const handleMouseEnter = () => setActive(true);
  const handleMouseLeave = () => setActive(false);

  return (
    <Link
      className={classNames('icon-link', className)}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <Icon type={type} active={isActive} />
      {children ? <span className="text">{children}</span> : null}
    </Link>
  );
};

export default IconLink;

