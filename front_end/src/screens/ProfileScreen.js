import React, { useContext, useReducer, useState } from 'react';
import '../styles/ProfileScreen.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../Utils';
import Loading from '../components/Loading';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAILED':
      return { ...state, loading: false };
  }
};

export default function ProfileScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails } = state;

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const [activeNav, setActiveNav] = useState(1);
  const [username, setUsername] = useState(
    userDetails ? userDetails.username : ''
  );
  const [email, setEmail] = useState(userDetails ? userDetails.email : '');
  const [address, setAddress] = useState(
    userDetails ? userDetails.address : ''
  );
  const [city, setCity] = useState(userDetails ? userDetails.city : '');
  const [postal, setPostal] = useState(userDetails ? userDetails.postal : '');
  const [country, setCountry] = useState(
    userDetails ? userDetails.country : ''
  );
  const [phone, setPhone] = useState(
    userDetails
      ? userDetails.country === 'India'
        ? '+91 ' + userDetails.phone
        : userDetails.phone
      : ''
  );

  const addressSubmitHandler = async () => {
    try {
      dispatch({ type: 'FETCH_REQUEST' });
      const { data } = await Axios.put(
        `/users/address/${userDetails._id}`,
        {
          address,
          city,
          postal,
          country,
          phone,
        },
        {
          headers: { authorization: `Bearer ${userDetails.token}` },
        }
      );
      localStorage.setItem('userDetails', JSON.stringify(data));
      ctxDispatch({ type: 'SET_ADDRESS', payload: data });
      dispatch({ type: 'FETCH_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'FETCH_FAILED' });
      toast.error(getError(err));
    }
  };

  const signoutHandler = () => {};

  return (
    <section className="profile-page">
      {loading && (
        <div className="machine-loading">
          <Loading />
        </div>
      )}
      <div className="top-margin-signin"></div>
      <div className="user-profile-container">
        <div className="user-profile-header">
          <h1>
            <i className="fa-solid fa-user fa-flip"></i> USER PROFILE
          </h1>
        </div>
        <div className="user-profile-details">
          <div className="user-profile-sidebar">
            <button
              type="button"
              className={
                activeNav === 1
                  ? 'user-profile-nav-item user-profile-active-nav-item'
                  : 'user-profile-nav-item'
              }
              onClick={() => setActiveNav(1)}
            >
              <i className="fa-solid fa-circle-info"></i>
              INFORMATION
            </button>
            <button
              type="button"
              className={
                activeNav === 2
                  ? 'user-profile-nav-item user-profile-active-nav-item'
                  : 'user-profile-nav-item'
              }
              onClick={() => setActiveNav(2)}
            >
              <i className="fa-solid fa-address-book"></i>
              ADDRESS BOOK
            </button>
            <Link to="/order-history">
              <i className="fa-solid fa-tag"></i>
              MY ORDERS
            </Link>
            <Link to="/recent-activity">
              <i className="fa-solid fa-clock-rotate-left"></i>
              RECENT ACTIVITY
            </Link>
            <Link to="/recent-activity">
              <i className="fa-regular fa-heart"></i>
              WISHLIST
            </Link>

            <Link to="/settings">
              <i className="fa-solid fa-gear fa-spin"></i>
              SETTINGS
            </Link>
            <Link to="#" onClick={signoutHandler}>
              <i className="fa-solid fa-power-off"></i>
              SIGN OUT
            </Link>
          </div>
          <div className="user-profile-detail">
            {activeNav === 1 && (
              <div className="user-profile-information-container">
                <h1>EDIT INFORMATION</h1>
                <div className="user-profile-image-container">
                  <div className="user-profile-image">
                    <img
                      src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                      alt="user"
                    />
                  </div>
                  <div className="user-profile-image-button-container">
                    <button
                      type="button"
                      className="user-profile-image-remove-button"
                    >
                      Remove <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <button
                      type="button"
                      className="user-profile-image-edit-button"
                    >
                      Edit <i className="fa-solid fa-pen"></i>
                    </button>
                  </div>
                </div>

                <form className="user-profile-account-information-form">
                  <div className="user-profile-account-information-form-container">
                    <div className="user-profile-change-password-container">
                      <h1>ACCOUNT INFORMATION</h1>
                      <div className="input-fields">
                        <input
                          type="text"
                          id="username"
                          placeholder=" "
                          required
                        />
                        <label htmlFor="username">Full Name</label>
                      </div>
                      <div className="input-fields">
                        <input
                          type="email"
                          id="email"
                          placeholder=" "
                          required
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="user-profile-change-password-container">
                      <h1>CHANGE PASSWORD</h1>
                      <div className="input-fields">
                        <input
                          type="password"
                          id="password"
                          placeholder=" "
                          required
                        />
                        <label htmlFor="password">New Password</label>
                      </div>
                      <div className="input-fields">
                        <input
                          type="password"
                          id="confirmPassword"
                          placeholder=" "
                          required
                        />
                        <label htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="user-profile-save-button-container">
                    <button type="reset" className="user-profile-cancel-button">
                      Cancel
                    </button>
                    <button type="submit" className="user-profile-save-button">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            )}
            {activeNav === 2 && (
              <div className="user-profile-information-container">
                <h1>ADDRESS BOOK</h1>
                <form
                  className="shipping-address-form address-book-container"
                  onSubmit={addressSubmitHandler}
                >
                  <div className="input-fields">
                    <input
                      type="text"
                      id="address"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="address">Address*</label>
                  </div>
                  <div className="input-fields">
                    <input
                      type="text"
                      id="city"
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="city">City*</label>
                  </div>
                  <div className="input-fields">
                    <input
                      type="text"
                      id="postal"
                      onChange={(e) => setPostal(e.target.value)}
                      value={postal}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="postal">Postal Code*</label>
                  </div>
                  <div className="input-fields">
                    <input
                      type="text"
                      id="country"
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="country">Country*</label>
                  </div>
                  <div className="input-fields">
                    <input
                      type="tel"
                      id="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="phone">Mobile Number*</label>
                  </div>
                  <div className="user-address-book-save-button-container">
                    <button type="reset" className="user-profile-cancel-button">
                      Cancel
                    </button>
                    <button type="submit" className="user-profile-save-button">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
