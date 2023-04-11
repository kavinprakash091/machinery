import React from 'react';
import '../styles/HomeScreen.css';

export default function About() {
  return (
    <section className="about-our-factor">
      <section className="about-left-section">
        <h2>
          About our <span className="important">Factor</span>
        </h2>
        <p>
          We are here to provide you a machinery with 100% replacement with{' '}
          <span className="danger">Warranty</span> upto on machines. You all
          keep a trust eye on our product. Keep visiting our pages.{' '}
          <span className="important">
            'To work stress-free choose a machine that keep you relaxed'.
          </span>
        </p>
      </section>
      <section className="about-right-section">
        <img src={require('../assets/about_image.png')} alt="about" />
      </section>
      <section className="about-detail-container">
        <div className="about-logo-containers">
          <div className="about-logo-container">
            <i className="fa-solid fa-hand-holding-dollar"></i>
          </div>
          <div className="about-logo-detail-container">
            <h1>Nature of Business</h1>
            Manufacturer
          </div>
        </div>
        <div className="about-logo-containers">
          <div className="about-logo-container">
            <i className="fa-solid fa-users"></i>
          </div>
          <div className="about-logo-detail-container">
            <h1>Number of Employees</h1>
            Upto 5 People
          </div>
        </div>
        <div className="about-logo-containers">
          <div className="about-logo-container">
            <i className="fa-solid fa-building-user"></i>
          </div>
          <div className="about-logo-detail-container">
            <h1>Year of Establishment</h1>
            2023
          </div>
        </div>
        <div className="about-logo-containers">
          <div className="about-logo-container">
            <i className="fa-solid fa-scale-balanced"></i>
          </div>
          <div className="about-logo-detail-container">
            <h1>Legal Status of Firm</h1>
            Individual - Proprietor
          </div>
        </div>
        <div className="about-logo-containers">
          <div className="about-logo-container">
            <i className="fa-solid fa-coins"></i>
          </div>
          <div className="about-logo-detail-container">
            <h1>Annual Turnover</h1>
            Upto Rs. 50 lakhs
          </div>
        </div>
        <div className="about-logo-containers">
          <div className="about-logo-container">
            <i className="fa-solid fa-clipboard"></i>
          </div>
          <div className="about-logo-detail-container">
            <h1>GST Number</h1>
            33BIGPS0754J2Z3
          </div>
        </div>
      </section>
    </section>
  );
}
