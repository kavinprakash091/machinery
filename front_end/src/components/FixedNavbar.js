import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../Store';

export default function FixedNavbar() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails, cartItems } = state;
  const [search, setSearch] = useState('');
  const [activeProfile, setActiveProfile] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    alert(search);
  };
  const signoutHandler = () => {
    localStorage.removeItem('userDetails');
    ctxDispatch({ type: 'SIGN_OUT' });
    toast.success(userDetails.username + ' signed out successfully!');
  };
  return (
    <nav className="fixed-navbar">
      <div className="fixed-navbar-left-section">
        {' '}
        <div className="navbar-brand">
          <img src={require('../assets/machine_logo_brand.png')} alt="logo" />
        </div>
        <div className="search-bar-container">
          <form className="navbar-search-form" onSubmit={submitHandler}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter product detail"
            />
            <button type="submit" className="navbar-search-button">
              <i className="fa-solid fa-magnifying-glass fa-beat-fade"></i>
            </button>
            <button type="button" className="get-best-price-button">
              Get Best Price
            </button>
          </form>
        </div>
      </div>
      <div className="fixed-navbar-right-section">
        <Link to="/cart" className="login-button">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>
            Cart
            <span className="cart-count-batch">
              {cartItems.reduce((s, a) => s + a.quantity, 0)}
            </span>
          </span>
        </Link>
        <button className="login-button help-button">
          <i className="fa-solid fa-question fa-flip"></i>
          <span>Help</span>
          <div className="help-container">
            <h6>Find answers to your queries</h6>
            <Link to="/buying">
              <i className="fa-solid fa-cart-plus"></i>
              For <span>Buying</span>
            </Link>
            <Link to="/feedback">
              <i className="fa-solid fa-thumbs-up"></i>
              Share your Feedback
            </Link>
            <Link to="/complaint">
              <i className="fa-solid fa-file-pen"></i>
              Raise a Complaint
            </Link>
            <Link to="/email">
              <i className="fa-solid fa-envelope"></i>
              Email us on <br></br>
              <span>
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;company@gmail.com
              </span>
            </Link>
            <Link to="/call">
              <i className="fa-solid fa-phone"></i>
              Call us at <span>080-8080-8080</span>
            </Link>
            <Link to="/chat">
              <i className="fa-brands fa-rocketchat"></i>
              Chat with us
            </Link>
            <Link to="/buying">
              <i className="fa-solid fa-book-open"></i>
              Seller Academy
            </Link>
          </div>
        </button>
        <Link to="#" className="login-button">
          <i className="fa-solid fa-message"></i>
          <span>Messages</span>
        </Link>
        {userDetails ? (
          <Link
            to="#"
            onClick={() => setActiveProfile(!activeProfile)}
            className="login-button"
          >
            <i className="fa-solid fa-user"></i>
            <span>{userDetails.username}</span>
            <div
              className={
                activeProfile
                  ? 'profile-list-container active-profile-list-container'
                  : 'profile-list-container'
              }
            >
              <div className="profile-image-container">
                <img
                  src={require('../assets/user_avatar_logo.png')}
                  alt={userDetails.username}
                />
              </div>
              <div className="profile-name-container">
                <Link to="/users/profile">{userDetails.username}</Link>
              </div>
              <Link to="/users/profile">
                <i className="fa-solid fa-user"></i>
                User Profile
              </Link>
              <Link to="/order-history">
                <i className="fa-solid fa-tag"></i>
                My Orders
              </Link>
              <Link to="/recent-activity">
                <i className="fa-solid fa-clock-rotate-left"></i>
                Recent Activity
              </Link>
              <Link to="/settings">
                <i className="fa-solid fa-gear fa-spin"></i>
                Settings
              </Link>
              <Link to="#" onClick={signoutHandler}>
                <i className="fa-solid fa-power-off"></i>
                Sign Out
              </Link>
            </div>
          </Link>
        ) : (
          <Link to="/sign-in" className="login-button">
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>Sign in</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
