import React, { useContext, useEffect, useReducer, useState } from 'react';
import '../styles/ShippingAddressScreen.css';
import PageHeader from '../components/PageHeader';
import ContactHeader from '../components/ContactHeader';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import ProgressIndicator from '../components/ProgressIndicator';
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

export default function PaymentScreen() {
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails, payment_method } = state;

  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
  });

  const [payment, setPayment] = useState(
    payment_method ? payment_method.payment : ''
  );
  const [delivery, setDelivery] = useState(
    payment_method ? payment_method.delivery : ''
  );

  useEffect(() => {
    window.scrollTo(0, 576);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: 'FETCH_REQUEST' });
    try {
      const pay = {
        payment: payment,
        delivery: delivery,
      };
      localStorage.setItem('paymentMethod', JSON.stringify(pay));
      ctxDispatch({ type: 'PAYMENT_METHOD', payload: pay });
      dispatch({ type: 'FETCH_SUCCESS' });
      navigate('/placeorder');
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
          <NewsHome content="Payment method" />
          <section className="shipping-address-container">
            <h1>
              <i className="fa-solid fa-wallet fa-bounce"></i> Payment{' '}
              <span className="important">Method</span>
            </h1>
            <ProgressIndicator progress={2} />
            {error && (
              <MessageBox
                message={error}
                url=""
                color="#ff8282"
                close={false}
              />
            )}
            <div className="payment-form-container">
              <form className="payment-form" onSubmit={submitHandler}>
                <div className="payment-form-content">
                  <div className="payment-method-container">
                    <h1>Payment Option</h1>
                    <div className="payment-field">
                      <input
                        type="radio"
                        id="paytm"
                        name="payment-method"
                        checked={payment === 'Paytm'}
                        onChange={() => setPayment('Paytm')}
                        required
                      />
                      <label htmlFor="paytm">Paytm</label>
                    </div>
                    <div className="payment-field">
                      <input
                        type="radio"
                        id="paypal"
                        name="payment-method"
                        checked={payment === 'Paypal'}
                        onChange={() => setPayment('Paypal')}
                        required
                      />
                      <label htmlFor="paypal">Paypal</label>
                    </div>
                    <div className="payment-field">
                      <input
                        type="radio"
                        id="gpay"
                        name="payment-method"
                        checked={payment === 'Gpay'}
                        onChange={() => setPayment('Gpay')}
                        required
                      />
                      <label htmlFor="gpay">Gpay</label>
                    </div>
                    <div className="payment-field">
                      <input
                        type="radio"
                        id="cash"
                        name="payment-method"
                        checked={payment === 'Cash on delivery'}
                        onChange={() => setPayment('Cash on delivery')}
                        required
                      />
                      <label htmlFor="cash">Cash on delivery</label>
                    </div>
                  </div>
                  <div className="payment-method-container">
                    <h1>Delivery Option</h1>
                    <div className="payment-field">
                      <input
                        type="radio"
                        id="door"
                        name="delivery-type"
                        checked={delivery === 'Door step delivery'}
                        onChange={() => setDelivery('Door step delivery')}
                        required
                      />
                      <label htmlFor="door">Door step delivery</label>
                    </div>
                    <div className="payment-field">
                      <input
                        type="radio"
                        id="click"
                        name="delivery-type"
                        checked={delivery === 'Click & collect'}
                        onChange={() => setDelivery('Click & collect')}
                        required
                      />
                      <label htmlFor="click">Click & collect</label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="shipping-address-submit-button payment-method-button"
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
