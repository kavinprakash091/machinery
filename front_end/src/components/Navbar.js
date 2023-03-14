import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <li>
          <Link to="#" data-link-alt="HOME">
            <span className="navbar-item">HOME</span>
          </Link>
        </li>
        <li>
          <Link to="#" data-link-alt="MACHINES">
            <span className="navbar-item">MACHINES</span>
          </Link>
        </li>
        <li>
          <Link to="#" data-link-alt="SERVICES">
            <span className="navbar-item">SERVICES</span>
          </Link>
        </li>
        <li>
          <Link to="#" data-link-alt="CONTACT">
            <span className="navbar-item">CONTACT</span>
          </Link>
        </li>
        <li>
          <Link to="#" data-link-alt="ABOUT">
            <span className="navbar-item">ABOUT</span>
          </Link>
        </li>
      </ul>
      <button className="send-query-button">
        <div className="send-query-icon">
          <i className="fa-solid fa-phone-volume"></i>
        </div>
        <span className="send-query">Send Query</span>
      </button>
    </nav>
  );
}
