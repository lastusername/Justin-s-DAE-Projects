 import '../PagesCSS/sign.css';
 
 
 function SignUp() {
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
              />
            </div>
          </div>

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