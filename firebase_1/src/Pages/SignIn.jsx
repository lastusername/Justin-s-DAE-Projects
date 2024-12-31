import { Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import '../PagesCSS/sign.css';
import { useState } from 'react';

function SignIn() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
    return (
    <div className="login-container">
      <div className="login-header">
        <img
          alt="Your Company"
          src="https://www.fbla.org/media/2022/05/FBLA_VerticalLogo-1024x792.png"
          className="login-logo"
        />
        <h2 className="login-title">
          Sign in to your account
        </h2>
      </div>

      <div className="login-form-container">
        <form action="#" method="POST" className="login-form">
          <div className="form-group">
            <label htmlFor="email">
              Email address
            </label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="password-group">
              <label htmlFor="password">
                Password
              </label>
              <div>
                <Link to={'/SignUp'} className="forgot-password">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button type="submit" className="submit-button">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


   
  export default SignIn;