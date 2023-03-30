import Axios from 'axios';
import React, { useContext, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
import { Store } from '../Store';
import '../styles/SigninScreen.css';
import { getError } from '../Utils';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAILED':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function SigninScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });
  const [activeButton, setActiveButton] = useState(0);
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'FETCH_REQUEST' });
      if (signupPhone.length === 10) {
        const { data } = await Axios.put('/users/sign-up', {
          username: signupName,
          email: signupEmail,
          password: signupPassword,
          phone: signupPhone,
        });
        localStorage.setItem('userDetails', JSON.stringify(data));
        ctxDispatch({ type: 'SIGN_UP', payload: data });
        toast.success(data.username + ' signed up successfully!');
        navigate('/');
        dispatch({ type: 'FETCH_SUCCESS' });
      } else {
        dispatch({ type: 'FETCH_FAILED' });
        toast.error('Enter a valid mobile number!');
      }
    } catch (err) {
      dispatch({ type: 'FETCH_FAILED' });
      toast.error(getError(err));
    }
  };

  const signinHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {loading && <Loading />}
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
            <Link
              to="https://www.google.com"
              className="google-button-container"
            >
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
            <Link
              to="https://www.google.com"
              className="google-button-container"
            >
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
    </div>
  );
}
