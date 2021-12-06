import React from 'react';
import './style.scss';
import { classNames } from 'lib';
import { IconLink } from 'components';

const Social = ({ className, ...rest }) => (
  <span
    className={classNames('social', className)}
    {...rest}
  >
    <IconLink type="linkedin" href="//linkedin.com/tokenvalet" />
    <IconLink type="twitter" href="//twitter.com/tokenvalet" />
  </span>
);

export default Social;
