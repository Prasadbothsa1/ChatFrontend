import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="container" id="container">
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please log in with your personal info</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
