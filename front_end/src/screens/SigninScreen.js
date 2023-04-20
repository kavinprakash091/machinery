import Axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
import { Store } from '../Store';
import '../styles/SigninScreen.css';
import { getError } from '../Utils';
import jwt_decode from 'jwt-decode';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import PageNotFoundScreen from './PageNotFoundScreen';

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
  const { userDetails } = state;

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const [googleUser, setGoogleUser] = useState('');
  const [facebookUser, setFacebookUser] = useState('');
  const [activeButton, setActiveButton] = useState(0);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      dispatch({ type: 'FETCH_REQUEST' });
      if (phone.length === 10 || phone.length === 0) {
        const { data } = await Axios.put('/users/sign-up', {
          username,
          email,
          password,
          phone,
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
  const signupHandler = (e) => {
    e.preventDefault();
    signUp();
  };

  const signIn = async () => {
    try {
      dispatch({ type: 'FETCH_REQUEST' });
      const { data } = await Axios.post('/users/sign-in', {
        email,
        password,
      });
      localStorage.setItem('userDetails', JSON.stringify(data));
      ctxDispatch({ type: 'SIGN_IN', payload: data });
      toast.success(data.username + ' signed in successfully!');
      navigate('/');
      dispatch({ type: 'FETCH_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'FETCH_FAILED' });
      toast.error(getError(err));
    }
  };

  const signinHandler = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleSignUpCallbackResponse = async (response) => {
    var userObject = await jwt_decode(response.credential);
    setGoogleUser(userObject);
    setUsername(userObject.name);
    setEmail(userObject.email);
    setPassword('google-account');
    console.log(googleUser);
    signUp();
  };

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        '721534833667-llcku5r6d5nk4c4o1sifbi0nbgodq5tk.apps.googleusercontent.com',
      callback: handleSignUpCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('googleSignup'), {
      theme: 'outline',
      size: 'large',
    });

    google.accounts.id.prompt();
  }, []);

  const handleSignInCallbackResponse = async (response) => {
    var userObject = await jwt_decode(response.credential);
    setGoogleUser(userObject);
    setUsername(userObject.name);
    setEmail(userObject.email);
    setPassword('google-account');
    console.log(googleUser);
    signIn();
  };

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        '721534833667-llcku5r6d5nk4c4o1sifbi0nbgodq5tk.apps.googleusercontent.com',
      callback: handleSignInCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('googleSignin'), {
      theme: 'outline',
      size: 'large',
    });

    google.accounts.id.prompt();
  }, []);

  return (
    <div>
      {!userDetails ? (
        <div>
          {loading && <Loading />}
          <div className="top-margin-signin"></div>
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
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      placeholder="Username*"
                      required
                    />
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Email*"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      placeholder="Mobile Number*"
                      required
                    />
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
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
                <div className="google-button-container">
                  <button id="googleSignup" className="google-button"></button>
                  <div className="facebook-button">
                    <LoginSocialFacebook
                      appId="578627217572624"
                      onResolve={(response) => {
                        setFacebookUser(response);
                        setUsername(response.data.name);
                        setEmail(response.data.email);
                        setPassword('facebook-account');
                        signUp();
                      }}
                      onReject={(error) => {
                        toast.error('Something went wrong!');
                      }}
                    >
                      <FacebookLoginButton />
                    </LoginSocialFacebook>
                  </div>
                </div>
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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email*"
                    required
                  />
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
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

                <div className="google-button-container">
                  <button id="googleSignin" className="google-button"></button>
                  <div className="facebook-button">
                    <LoginSocialFacebook
                      appId="578627217572624"
                      onResolve={(response) => {
                        setFacebookUser(response);
                        setUsername(response.name);
                        setEmail(response.email);
                        setPassword('facebook-account');
                        signIn();
                      }}
                      onReject={(error) => {
                        toast.error('Something went wrong!');
                      }}
                    >
                      <FacebookLoginButton />
                    </LoginSocialFacebook>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <PageNotFoundScreen />
      )}
    </div>
  );
}
