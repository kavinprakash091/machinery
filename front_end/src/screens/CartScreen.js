import React from 'react';
import { Link } from 'react-router-dom';
import ContactFooter from '../components/ContactFooter';
import Footer from '../components/Footer';
import '../styles/CartScreen.css';

export default function CartScreen() {
  return (
    <section className="cart-page">
      <div className="cart-header">
        <i class="fa-solid fa-cart-shopping fa-shake"></i>
        <h1>
          Shopping <span className="important">Cart</span>
        </h1>
      </div>
      <div className="message-box">
        Cart empty
        <Link to="/machines"> Go to Shopping</Link>
      </div>
      <div className="cart-container">
        <div className="cart-items-container">
          <div className="cart-item-card">
            <div className="cart-item-image"></div>
            <div className="cart-item-name">
              <Link to="/machines/mini-dairy-plant">Mini Dairy Plant</Link>
            </div>
            <div className="cart-item-quantity">
              <i className="fa-solid fa-circle-plus"></i> <span>4 </span>
              <i className="fa-solid fa-circle-minus"></i>
            </div>
            <div className="cart-item-price">Rs 50000 /-</div>
            <div className="cart-item-remove">
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
          <div className="cart-item-card">
            <div className="cart-item-image"></div>
            <div className="cart-item-name">
              <Link to="/machines/mini-dairy-plant">Mini Dairy Plant</Link>
            </div>
            <div className="cart-item-quantity">
              <i className="fa-solid fa-circle-plus"></i> <span>4 </span>
              <i className="fa-solid fa-circle-minus"></i>
            </div>
            <div className="cart-item-price">Rs 50000 /-</div>
            <div className="cart-item-remove">
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
          <div className="cart-item-card">
            <div className="cart-item-image"></div>
            <div className="cart-item-name">
              <Link to="/machines/mini-dairy-plant">Mini Dairy Plant</Link>
            </div>
            <div className="cart-item-quantity">
              <i className="fa-solid fa-circle-plus"></i> <span>4 </span>
              <i className="fa-solid fa-circle-minus"></i>
            </div>
            <div className="cart-item-price">Rs 50000 /-</div>
            <div className="cart-item-remove">
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
          <div className="cart-item-card">
            <div className="cart-item-image"></div>
            <div className="cart-item-name">
              <Link to="/machines/mini-dairy-plant">Mini Dairy Plant</Link>
            </div>
            <div className="cart-item-quantity">
              <i className="fa-solid fa-circle-plus"></i> <span>4 </span>
              <i className="fa-solid fa-circle-minus"></i>
            </div>
            <div className="cart-item-price">Rs 50000 /-</div>
            <div className="cart-item-remove">
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
        <div className="sub-total-container">
          <h1>Subtotal (4 items) :</h1>
          <h1>Rs 100000 /-</h1>
          <button type="button" className="proceed-to-checkout-button">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <ContactFooter />
      <Footer />
    </section>
  );
}
