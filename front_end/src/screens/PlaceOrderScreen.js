import React, { useContext, useEffect, useReducer } from 'react';
import Footer from '../components/Footer';
import ContactFooter from '../components/ContactFooter';
import MessageBox from '../components/MessageBox';
import ProgressIndicator from '../components/ProgressIndicator';
import NewsHome from '../components/NewsHome';
import Navbar from '../components/Navbar';
import ContactHeader from '../components/ContactHeader';
import PageHeader from '../components/PageHeader';
import Loading from '../components/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import '../styles/PlaceOrderScreen.css';

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

export default function PlaceOrderScreen() {
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { machine_list, cartItems, shipping_address, payment_method } = state;

  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
  });

  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  const itemsPrice = round2(
    cartItems.reduce((s, a) => s + a.quantity * a.price, 0)
  );

  const shippingPrice = itemsPrice > 100000 ? round2(0) : round2(100);
  const taxPrice = round2(0.15 * itemsPrice);
  const deliveryPrice =
    payment_method.delivery === 'Click & collect' ? round2(0) : round2(1000);
  const totalPrice = itemsPrice + shippingPrice + taxPrice + deliveryPrice;
  return (
    <section className="shipping-address-page">
      {loading && (
        <div className="shipping-address-loading">
          <Loading />
        </div>
      )}
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="Place order" />
      <section className="shipping-address-container">
        <h1>
          <i className="fa-solid fa-truck fa-bounce"></i> Place{' '}
          <span className="important">Order</span>
        </h1>
        <ProgressIndicator progress={3} />
        {error && (
          <MessageBox message={error} url="" color="#ff8282" close={false} />
        )}
        <div className="place-order-container">
          <div className="place-order-left-section">
            <div className="place-order-shipping">
              <h1>Shipping</h1>
              <table>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>:</td>
                    <td>{shipping_address.username}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>:</td>
                    <td>
                      {shipping_address.address}, {shipping_address.city} -{' '}
                      {shipping_address.postal}, {shipping_address.country}.
                    </td>
                  </tr>
                  <tr>
                    <td>Mobile</td>
                    <td>:</td>
                    <td>
                      {shipping_address.country.toLowerCase() === 'india' &&
                        '+91'}{' '}
                      {shipping_address.phone}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="delivered-box">Not delivered</div>
              <Link to="/shipping" className="place-order-edit">
                Edit
              </Link>
            </div>

            <div className="place-order-shipping place-order-shipping1">
              <h1>Payment & Delivery</h1>
              <table>
                <tbody>
                  <tr>
                    <td>Payment method</td>
                    <td>:</td>
                    <td>{payment_method.payment}</td>
                  </tr>
                  <tr>
                    <td>Delivery type</td>
                    <td>:</td>
                    <td>{payment_method.delivery}</td>
                  </tr>
                </tbody>
              </table>
              <div className="paid-box">Paid</div>
              <Link to="/payment" className="place-order-edit">
                Edit
              </Link>
            </div>

            <div className="place-order-shipping">
              <h1>Cart Items</h1>
              {cartItems.map((cartItem) =>
                machine_list
                  .find((product) => product.name === cartItem.category)
                  .product_details.map(
                    (product_detail) =>
                      product_detail.name === cartItem.name && (
                        <div
                          className="place-order-cart-item-card"
                          key={cartItem.name}
                        >
                          <div className="place-order-cart-item-image">
                            <img
                              src={product_detail.image}
                              alt={product_detail.name}
                            />
                          </div>
                          <Link
                            to={`/machines/${product_detail.name
                              .toLowerCase()
                              .replace(/ /g, '-')}`}
                            className="place-order-cart-item-name"
                          >
                            {product_detail.name}
                          </Link>
                          <div className="place-order-cart-item-quantity">
                            {cartItem.quantity}
                          </div>
                          <div className="place-order-cart-item-price">
                            Rs {product_detail.price.toLocaleString('en-US')} /-
                          </div>
                        </div>
                      )
                  )
              )}

              <Link to="/cart" className="place-order-edit">
                Edit
              </Link>
            </div>
          </div>
          <div className="place-order-right-section">
            <div className="order-summary-container">
              <h1>Order summary</h1>
              <table>
                <tbody>
                  <tr>
                    <td>Items</td>
                    <td>
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                    </td>
                    <td>{itemsPrice.toFixed(2).toLocaleString('en-US')}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                    </td>
                    <td>{shippingPrice.toFixed(2).toLocaleString('en-US')}</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td>
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                    </td>
                    <td>{taxPrice.toFixed(2).toLocaleString('en-US')}</td>
                  </tr>
                  <tr>
                    <td>Delivery</td>
                    <td>
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                    </td>
                    <td>{deliveryPrice.toFixed(2).toLocaleString('en-US')}</td>
                  </tr>
                  <tr>
                    <td>Order total</td>
                    <td>
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                    </td>
                    <td>{totalPrice.toFixed(2).toLocaleString('en-US')}</td>
                  </tr>
                </tbody>
              </table>
              <button type="button" className="order-confirm-button">
                Confirm Order
              </button>
            </div>
            <div className="order-status-container">
              <h1>Order status</h1>
              <div className="order-status-progress-container">
                <div className="order-status-progress order-status-progress1">
                  <div>
                    <div className="order-status-outer-circle order-status-outer-circle1">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="order-status-line"></div>
                  </div>
                  <span>Accepted</span>
                </div>
                <div className="order-status-progress">
                  <div>
                    <div className="order-status-outer-circle">
                      <div className="order-status-inner-circle"></div>
                    </div>
                    <div className="order-status-line"></div>
                  </div>
                  <span>Shipped</span>
                </div>
                <div className="order-status-progress">
                  <div>
                    <div className="order-status-outer-circle">
                      <div className="order-status-inner-circle"></div>
                    </div>
                  </div>
                  <span>Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
      <Footer />
    </section>
  );
}
