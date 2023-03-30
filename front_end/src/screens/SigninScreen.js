import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SigninScreen.css';

export default function SigninScreen() {
  const [activeButton, setActiveButton] = useState(0);
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');

  const signupHandler = (e) => {
    e.preventDefault();
  };

  const signinHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="signin-page">
      <div className="signin-container">
        <div className="signin-header-container">
          <button
            type="button"
            onClick={() => setActiveButton(0)}
            className={
              activeButton === 0
                ? 'signin-button active-signin-button'
                : 'signin-button'
            }
          >
            SIGN UP
          </button>
          <button
            type="button"
            onClick={() => setActiveButton(1)}
            className={
              activeButton === 1
                ? 'signin-button active-signin-button'
                : 'signin-button'
            }
          >
            SIGN IN
          </button>
        </div>
        <div
          className={
            activeButton === 0
              ? 'signup-form-container active-signup-form-container'
              : 'signup-form-container'
          }
        >
          <form className="signin-form" onSubmit={signupHandler}>
            <div>
              <input
                type="text"
                onChange={(e) => setSignupName(e.target.value)}
                value={signupName}
                placeholder="Username*"
                required
              />
              <input
                type="email"
                onChange={(e) => setSignupEmail(e.target.value)}
                value={signupEmail}
                placeholder="Email*"
                required
              />
            </div>
            <div>
              <input
                type="phone"
                onChange={(e) => setSignupPhone(e.target.value)}
                value={signupPhone}
                placeholder="Mobile Number*"
                required
              />
              <input
                type="password"
                onChange={(e) => setSignupPassword(e.target.value)}
                value={signupPassword}
                placeholder="Password*"
                required
              />
            </div>
            <button type="submit" className="signin-form-button">
              SIGN UP
            </button>
          </form>
          <div className="forgot-password-container">
            <Link to="/sign-in" onClick={() => setActiveButton(1)}>
              Already have an account ?
            </Link>
          </div>
          <div className="or-container">
            <div className="or-line"></div>
            <span>or</span>
            <div className="or-line"></div>
          </div>
          <Link to="https://www.google.com" className="google-button-container">
            <div className="google-icon">
              <img src={require('../assets/google_icon.png')} alt="google" />
            </div>
            Continue with Google
          </Link>
          <Link
            to="https://www.facebook.com"
            className="google-button-container"
          >
            <div className="google-icon">
              <img
                src={require('../assets/facebook_icon.png')}
                alt="facebook"
              />
            </div>
            Continue with Facebook
          </Link>
        </div>
        <div
          className={
            activeButton === 1
              ? 'signin-form-container active-signin-form-container'
              : 'signin-form-container'
          }
        >
          <form className="signin-form" onSubmit={signinHandler}>
            <input
              type="email"
              onChange={(e) => setSigninEmail(e.target.value)}
              value={signinEmail}
              placeholder="Email*"
              required
            />
            <input
              type="password"
              onChange={(e) => setSigninPassword(e.target.value)}
              value={signinPassword}
              placeholder="Password*"
              required
            />
            <button type="submit" className="signin-form-button">
              SIGN IN
            </button>
          </form>
          <div className="forgot-password-container">
            <Link to="/forgot-password">Forgot Password ?</Link>
          </div>

          <div className="or-container">
            <div className="or-line"></div>
            <span>or</span>
            <div className="or-line"></div>
          </div>
          <Link to="https://www.google.com" className="google-button-container">
            <div className="google-icon">
              <img src={require('../assets/google_icon.png')} alt="google" />
            </div>
            Continue with Google
          </Link>
          <Link
            to="https://www.facebook.com"
            className="google-button-container"
          >
            <div className="google-icon">
              <img
                src={require('../assets/facebook_icon.png')}
                alt="facebook"
              />
            </div>
            Continue with Facebook
          </Link>
        </div>
      </div>
    </section>
  );
}
