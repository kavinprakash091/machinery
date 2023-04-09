import React, { useState } from 'react';
import '../styles/ProfileScreen.css';
import { Link } from 'react-router-dom';

export default function () {
  const [activeNav, setActiveNav] = useState(1);
  const signoutHandler = () => {};

  return (
    <section className="profile-page">
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
              <div className="user-profile-account-information-container">
                <div className="user-profile-account-information">
                  <h1>ACCOUNT INFORMATION</h1>
                  <form className="shipping-address-form">
                    <div className="input-fields">
                      <input
                        type="text"
                        id="username"
                        placeholder=" "
                        required
                      />
                      <label htmlFor="username">Full Name*</label>
                    </div>
                    <div className="input-fields">
                      <input type="email" id="email" placeholder=" " required />
                      <label htmlFor="email">Email*</label>
                    </div>
                  </form>
                </div>
                <div className="user-profile-change-password">
                  <h1>CHANGE PASSWORD</h1>
                  <form className="shipping-address-form">
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
                      <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user-profile-save-button-container">
          <button type="reset" className="user-profile-cancel-button">
            Cancel
          </button>
          <button type="button" className="user-profile-save-button">
            Save
          </button>
        </div>
      </div>
    </section>
  );
}
