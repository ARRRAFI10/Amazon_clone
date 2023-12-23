import React from 'react';
import { Link } from 'react-router-dom';
import amazonLogo from './Amazon-Logo.png';
import './login.css';

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={amazonLogo} alt="Amazon Logo" />
      </Link>
      <div className="container">
        <h1>Sign-In</h1>
        <form action="">
          <div className="form__group">
            <label>Email</label>
            <input type="text" className="form__input" />
          </div>
          <div className="form__group">
            <label>Password</label>
            <input type="password" className="form__input" />
          </div>
          <button className="login__button">Sign in</button>
          <p className="terms__text">
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
          </p>
          <button className="create__account__button">Create your Amazon Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
