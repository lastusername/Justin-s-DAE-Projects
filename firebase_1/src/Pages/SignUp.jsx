 import '../PagesCSS/sign.css';
 import { useState } from 'react';
 import { Link, Routes, Route, useNavigate } from 'react-router-dom';
 import {useUserAuth} from "../Context/UserAuthContext"
 
 function SignUp() {
  const {signUp} = useUserAuth

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [name, setName] = useState("")
  let [error, setError] = useState("")
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault()
    try {
      await signUp(email, password)
      Navigate("/Home")
    } catch (err) {
      setError(err.message);
      console.log(error)
    }



}


    return (
      <div className="login-container">
      <div className="login-header">
        <img
          alt="Your Company"
          src="https://www.fbla.org/media/2022/05/FBLA_VerticalLogo-1024x792.png"
          className="login-logo"
        />
        <h2 className="login-title">
          Create your account
        </h2>
      </div>
      <div className="login-form-container">
        <form onSubmit={handleSubmit} method="POST" className="login-form">
        <div className="form-group">
            <label htmlFor="email">
              Name
            </label>
            <div>
              <input
                id="name"
                name="name"
                type="name"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                
              />
            </div>
          </div>
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
          <Link to={'/SignIn'} className="forgot-password">
                  Already have an account?
          </Link>

          <div>
            <button type="submit" className="submit-button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
  }

export default SignUp;