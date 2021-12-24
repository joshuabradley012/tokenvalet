import React from 'react';
import { BackButton } from 'components';

const Section = ({ backButton = true, children, className, ...rest }) => (
  <section className={className} {...rest}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-content">
          {backButton ? <BackButton /> : null}
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default Section;
