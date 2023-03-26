import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css';
import Header from './Header';

export default function Team() {
  const [isEmployeeShowMore, setEmployeeShowMore] = useState(false);
  return (
    <section className="team-members-container">
      <Header heading1="OUR AWESOME" heading2="TEAM" />
      <div
        className={
          isEmployeeShowMore
            ? 'employees-container big-employees'
            : 'employees-container'
        }
      >
        <div className="employee-card">
          <div className="employee-image">
            <img src={require('../assets/employee1.png')} alt="employee" />
          </div>
          <div className="employee-details">
            <h1>Kavin Prakash</h1>
            <h5>Project Manager</h5>
            <div className="employee-social-media-container">
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
                <i className="fa-brands fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="employee-card">
          <div className="employee-image">
            <img src={require('../assets/employee2.png')} alt="employee" />
          </div>
          <div className="employee-details">
            <h1>Kavin Prakash</h1>
            <h5>Project Manager</h5>
            <div className="employee-social-media-container">
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
                <i className="fa-brands fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="employee-card">
          <div className="employee-image">
            <img src={require('../assets/employee3.png')} alt="employee" />
          </div>
          <div className="employee-details">
            <h1>Kavin Prakash</h1>
            <h5>Project Manager</h5>
            <div className="employee-social-media-container">
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
                <i className="fa-brands fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="employee-card">
          <div className="employee-image">
            <img src={require('../assets/employee1.png')} alt="employee" />
          </div>
          <div className="employee-details">
            <h1>Kavin Prakash</h1>
            <h5>Project Manager</h5>
            <div className="employee-social-media-container">
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
                <i className="fa-brands fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="employee-card">
          <div className="employee-image">
            <img src={require('../assets/employee2.png')} alt="employee" />
          </div>
          <div className="employee-details">
            <h1>Kavin Prakash</h1>
            <h5>Project Manager</h5>
            <div className="employee-social-media-container">
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
                <i className="fa-brands fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="employee-card">
          <div className="employee-image">
            <img src={require('../assets/employee3.png')} alt="employee" />
          </div>
          <div className="employee-details">
            <h1>Kavin Prakash</h1>
            <h5>Project Manager</h5>
            <div className="employee-social-media-container">
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
                <i className="fa-brands fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button
        className="show-more-button"
        onClick={() => setEmployeeShowMore(!isEmployeeShowMore)}
      >
        {isEmployeeShowMore ? 'Show less' : 'Show more'}
      </button>
    </section>
  );
}
