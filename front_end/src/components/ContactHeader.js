import React from 'react';
import '../styles/HomeScreen.css';

export default function ContactHeader() {
  return (
    <section className="contact-header">
      <div className="logo-container">
        <img src={require('../assets/machine_logo.png')} alt="machinery" />
      </div>{' '}
      <div className="contact-detail-container">
        <div className="contact-container">
          <div className="contact-logo-container">
            <i className="fa-solid fa-phone fa-beat-fade"> </i>{' '}
          </div>{' '}
          <div className="contact-logo-detail-container">
            <h3> Phone </h3> + 91 63698 38362{' '}
          </div>{' '}
        </div>{' '}
        <div className="contact-container">
          <div className="contact-logo-container">
            <i className="fa-solid fa-house fa-beat-fade"></i>
          </div>{' '}
          <div className="contact-logo-detail-container">
            <h3> Address </h3>
            125, Gandhi Nagar, Chennai - 600008.{' '}
          </div>{' '}
        </div>{' '}
        <div className="contact-container">
          <div className="contact-logo-container">
            <i className="fa-regular fa-clock fa-beat-fade"></i>
          </div>{' '}
          <div className="contact-logo-detail-container">
            <h3> Office Hours </h3>
            8: 30 am - 7: 00 pm{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
