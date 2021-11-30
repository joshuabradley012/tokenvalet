import React from 'react';
import './style.scss';
import classNames from 'lib/classnames';
import IconLink from 'components/icon-link';

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
