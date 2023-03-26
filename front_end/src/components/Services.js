import React from 'react';
import '../styles/HomeScreen.css';
import Header from './Header';

export default function Services() {
  return (
    <section className="services">
      <Header heading1="AWESOME" heading2="SERVICES" />
      <div className="services-container">
        <div className="service-card1">
          <h1>Transport service</h1>
          <p>
            We are here to provide you a machinery with 100% replacement with
            Warranty upto on machines. You all keep a trust eye on our product.
            Keep visiting our pages.
          </p>
        </div>
        <div className="service-card2">
          <h1>Tutorial service</h1>
          <p>
            We are here to provide you a machinery with 100% replacement with
            Warranty upto on machines. You all keep a trust eye on our product.
            Keep visiting our pages.
          </p>
        </div>
        <div className="service-card1">
          <h1>Transport service</h1>
          <p>
            We are here to provide you a machinery with 100% replacement with
            Warranty upto on machines. You all keep a trust eye on our product.
            Keep visiting our pages.
          </p>
        </div>
        <div className="service-card2">
          <h1>Tutorial service</h1>
          <p>
            We are here to provide you a machinery with 100% replacement with
            Warranty upto on machines. You all keep a trust eye on our product.
            Keep visiting our pages.
          </p>
        </div>
      </div>
    </section>
  );
}
