import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FixedNavbar() {
  const [search, setSearch] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    alert(search);
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
        <Link to="/signin" className="login-button">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>
            Cart<span className="cart-count-batch">5</span>
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
        <Link to="/" className="login-button">
          <i className="fa-solid fa-message"></i>
          <span>Messages</span>
        </Link>
        <Link to="/sign-in" className="login-button">
          <i className="fa-solid fa-right-to-bracket"></i>
          <span>Sign in</span>
        </Link>
      </div>
    </nav>
  );
}
