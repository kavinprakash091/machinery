import React, { useContext, useEffect, useReducer, useState } from 'react';
import '../styles/ShippingAddressScreen.css';
import ProgressIndicator from '../components/ProgressIndicator';
import PageHeader from '../components/PageHeader';
import ContactHeader from '../components/ContactHeader';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import ContactFooter from '../components/ContactFooter';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import { getError } from '../Utils';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';
import PageNotFoundScreen from './PageNotFoundScreen';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'FETCH_FAILED':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default function ShippingAddressScreen() {
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails, shipping_address } = state;

  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
  });

  const [username, setUsername] = useState(
    shipping_address ? shipping_address.username : ''
  );
  const [address, setAddress] = useState(
    shipping_address ? shipping_address.address : ''
  );
  const [city, setCity] = useState(
    shipping_address ? shipping_address.city : ''
  );
  const [postal, setPostal] = useState(
    shipping_address ? shipping_address.postal : ''
  );
  const [country, setCountry] = useState(
    shipping_address ? shipping_address.country : ''
  );
  const [phone, setPhone] = useState(
    shipping_address ? shipping_address.phone : ''
  );

  useEffect(() => {
    window.scrollTo(0, 576);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: 'FETCH_REQUEST' });
    try {
      const shipping = {
        username: username,
        address: address,
        city: city,
        postal: postal,
        country: country,
        phone: phone,
      };
      localStorage.setItem('shippingAddress', JSON.stringify(shipping));
      ctxDispatch({ type: 'SHIPPING_ADDRESS', payload: shipping });
      dispatch({ type: 'FETCH_SUCCESS' });
      navigate('/payment');
    } catch (err) {
      dispatch({ type: 'REQUEST_FAILED', error: getError(err) });
    }
  };

  return (
    <section>
      {userDetails ? (
        <section className="shipping-address-page">
          {loading && (
            <div className="shipping-address-loading">
              <Loading />
            </div>
          )}
          <div className="top-margin"></div>
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
            {error && (
              <MessageBox
                message={error}
                url=""
                color="#ff8282"
                close={false}
              />
            )}
            <div className="shipping-address-form-container">
              <form className="shipping-address-form" onSubmit={submitHandler}>
                <div className="input-fields">
                  <input
                    type="text"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="username">Full Name*</label>
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
                  <label htmlFor="address">Address*</label>
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
                  <label htmlFor="city">City*</label>
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
                  <label htmlFor="postal">Postal Code*</label>
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
                  <label htmlFor="country">Country*</label>
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
                  <label htmlFor="phone">Mobile Number*</label>
                </div>
                <button
                  type="submit"
                  className="shipping-address-submit-button"
                >
                  Continue
                </button>
              </form>
            </div>
          </section>
          <ContactFooter />
          <Footer />
        </section>
      ) : (
        <PageNotFoundScreen />
      )}
    </section>
  );
}
