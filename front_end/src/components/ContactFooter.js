import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css';

export default function ContactFooter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    alert(name + ' ' + email + ' ' + message);
  };
  return (
    <section className="contact-footer">
      <div className="social-contact-container">
        <div className="contact-machine-logo">
          <img
            src={require('../assets/machine_logo_black.png')}
            alt="machine"
          />
        </div>
        <p>
          We are here to provide you a machinery with 100% replacement with
          Warranty upto on machines. You all keep a trust eye on our product.
          Keep visiting our pages.
        </p>
        <div className="social-media-container1">
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
      </div>
      <div className="contact-us-container">
        <h1>CONTACT US</h1>
        <p>125, Gandhi Nagar,</p>
        <p>Chennai - 600008.</p>
        <div className="phone-fax-email-detail">
          <p>Phone : +91 63698 38362</p>
          <p>Fax : 55 44 66 77</p>
          <p>Email : company@gmail.com</p>
        </div>
      </div>
      <div className="quick-links-container">
        <h1>QUICK LINKS</h1>
        <div className="quick-links">
          <Link to="/">Home</Link>
          <Link to="/">Machines</Link>
          <Link to="/">Services</Link>
          <Link to="/">Blogs</Link>
          <Link to="/">Contact</Link>
          <Link to="/">About</Link>
        </div>
      </div>
      <div className="contact-info-container">
        <h1>CONTACT INFO</h1>
        <form className="contact-form" onSubmit={submitHandler}>
          <div className="form-input-container">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            type="text"
            placeholder="Your message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="contact-send-button">
            SEND &nbsp;&nbsp;&nbsp;
            <i className="fa-solid fa-paper-plane fa-bounce"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
