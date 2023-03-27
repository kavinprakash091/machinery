import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css';

export default function Navbar() {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <li onClick={() => setActiveNav(1)}>
          <Link to="/" data-link-alt="HOME">
            <span
              className={
                activeNav === 1
                  ? 'navbar-item active-navbar-item'
                  : 'navbar-item'
              }
            >
              HOME
            </span>
          </Link>
        </li>
        <li onClick={() => setActiveNav(2)}>
          <Link to="/machines" data-link-alt="MACHINES">
            <span
              className={
                activeNav === 2
                  ? 'navbar-item active-navbar-item'
                  : 'navbar-item'
              }
            >
              MACHINES
            </span>
          </Link>
        </li>
        <li onClick={() => setActiveNav(3)}>
          <Link to="#" data-link-alt="SERVICES">
            <span
              className={
                activeNav === 3
                  ? 'navbar-item active-navbar-item'
                  : 'navbar-item'
              }
            >
              SERVICES
            </span>
          </Link>
        </li>
        <li onClick={() => setActiveNav(4)}>
          <Link to="#" data-link-alt="BLOGS">
            <span
              className={
                activeNav === 4
                  ? 'navbar-item active-navbar-item'
                  : 'navbar-item'
              }
            >
              BLOGS
            </span>
          </Link>
        </li>
        <li onClick={() => setActiveNav(5)}>
          <Link to="#" data-link-alt="CONTACT">
            <span
              className={
                activeNav === 5
                  ? 'navbar-item active-navbar-item'
                  : 'navbar-item'
              }
            >
              CONTACT
            </span>
          </Link>
        </li>
        <li onClick={() => setActiveNav(6)}>
          <Link to="#" data-link-alt="ABOUT">
            <span
              className={
                activeNav === 6
                  ? 'navbar-item active-navbar-item'
                  : 'navbar-item'
              }
            >
              ABOUT
            </span>
          </Link>
        </li>
      </ul>
      <div className="query-button-container">
        <button className="send-query-button">
          <div className="send-query-icon">
            <i className="fa-solid fa-phone-volume fa-shake"></i>
          </div>
          <span className="send-query">Send Query</span>
        </button>
        <button className="send-query-button">
          <div className="send-query-icon">
            <i className="fa-solid fa-envelope fa-bounce"></i>
          </div>
          <span className="send-query">Send Email</span>
        </button>
      </div>
    </nav>
  );
}
