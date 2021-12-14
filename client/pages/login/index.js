import React from 'react';
import './style.scss';
import {
  Button,
  Link,
  Logo,
} from 'components';

const Login = () => (
  <section className="login-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
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
        </div>
      </div>
    </div>
  </section>
);

export default Login;
