import React from 'react';

const Login = () => {
  return (
    <div>
       <div className="background" />
  <div className="loginpage">
    <form className="loginForm">
      <img src="logopage.png" alt="Logo" className="logo" />
      <h1>Login</h1>
      <div className="input-box">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          required
          className="input-box"
        />
        <span className="icon">
          <i className="fas fa-user" />
        </span>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Password" />
        <span className="icon">
          <i className="fas fa-lock" />
        </span>
      </div>
      <div className="remember-forget">
        <label>
          <input type="checkbox" /> Remember me?
        </label>
        <a href="#">Forget Password</a>
      </div>
      <input className="button" type="submit" defaultValue="Connect" />
      <div className="register-link">
        <p>
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </form>
  </div>
    </div>
  );
}

export default Login;
