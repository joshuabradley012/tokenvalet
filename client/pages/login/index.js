import React from 'react';
import './style.scss';
import {
  Button,
  Link,
  Logo,
  Section,
} from 'components';

const Login = () => (
  <Section className="ticket-section" backButton={false}>
    <form>
      <div className="form-header">
        <Logo />
        <h2>Sign in</h2>
        <p>Use your tokenvalet account</p>
      </div>
      <label>Email</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" className="password" />
      <Link href="/reset-password">Forgot password?</Link>
      <p className="form-group form-footer">
        <Link href="/signup">Create account</Link>
        <input type="submit" />
      </p>
    </form>
  </Section>
);

export default Login;
