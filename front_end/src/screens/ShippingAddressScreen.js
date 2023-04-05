import React, { useEffect, useState } from 'react';
import '../styles/ShippingAddressScreen.css';
import ProgressIndicator from '../components/ProgressIndicator';
import PageHeader from '../components/PageHeader';
import ContactHeader from '../components/ContactHeader';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import ContactFooter from '../components/ContactFooter';
import Footer from '../components/Footer';

export default function ShippingAddressScreen() {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postal, setPostal] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="ahipping-address-page">
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="Shipping cart" />
      <section className="shipping-address-container">
        <h1>
          <i className="fa-solid fa-location-dot fa-bounce"></i> Shipping{' '}
          <span className="important">Address</span>
        </h1>
        <ProgressIndicator progress={1} />
        <div className="shipping-address-form-container">
          <form className="shipping-address-form">
            <div className="input-fields">
              <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder=" "
                required
              />
              <label for="username">Full Name*</label>
            </div>
            <div className="input-fields">
              <input
                type="text"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                placeholder=" "
                required
              />
              <label for="address">Address*</label>
            </div>
            <div className="input-fields">
              <input
                type="text"
                id="city"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                placeholder=" "
                required
              />
              <label for="city">City*</label>
            </div>
            <div className="input-fields">
              <input
                type="text"
                id="postal"
                onChange={(e) => setPostal(e.target.value)}
                value={postal}
                placeholder=" "
                required
              />
              <label for="postal">Postal Code*</label>
            </div>
            <div className="input-fields">
              <input
                type="text"
                id="country"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                placeholder=" "
                required
              />
              <label for="country">Country*</label>
            </div>
            <div className="input-fields">
              <input
                type="tel"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder=" "
                required
              />
              <label for="phone">Mobile Number*</label>
            </div>
            <button type="submit" className="shipping-address-submit-button">
              Continue
            </button>
          </form>
        </div>
      </section>
      <ContactFooter />
      <Footer />
    </section>
  );
}
