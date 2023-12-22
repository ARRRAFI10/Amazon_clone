import React from 'react';
import { Link } from "react-router-dom";
import amazonlogo from "./Amazon-Logo.png";
import "./login.css";

function login() {

  return (
    <div className="login">
      <Link to="/">
        <img 
                className="login__logo"
                src={amazonlogo}
                alt=""
        />
      </Link>
      <div className="container">
        <h1>Sign-In</h1>
        <form action="">
            <h5>Email</h5>
            <input type="text"/>
            <h5>Password</h5>
            <input type="text"/>
            <button>Sign in</button>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button>Create your Amazon Account</button>
        </form>

      </div>
    </div>
  )
}

export default login
