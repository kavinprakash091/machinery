import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css';

export default function PageHeader() {
  return (
    <section className="page-header">
      <div className="welcome-company">Welcome To Our Company</div>
      <div className="social-media-container">
        <Link to="https://www.google.com">
          <i className="fa-brands fa-facebook-f"></i>
        </Link>
        <Link to="https://www.google.com">
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link to="https://www.google.com">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link to="https://www.google.com">
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
        <Link to="https://www.google.com">
          <i className="fa-brands fa-dribbble"></i>
        </Link>
      </div>
    </section>
  );
}
