import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactFooter from '../components/ContactFooter';
import ContactHeader from '../components/ContactHeader';
import Footer from '../components/Footer';
import MessageBox from '../components/MessageBox';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';
import '../styles/CartScreen.css';

export default function CartScreen() {
  useEffect(() => {
    window.scrollTo(0, 620);
  }, []);
  return (
    <section className="cart-page">
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="shopping cart" />
      <div className="cart-header">
        <i class="fa-solid fa-cart-shopping fa-shake"></i>
        <h1>
          Shopping <span className="important">Cart</span>
        </h1>
      </div>
      <MessageBox message="Cart empty" url="Go to Shopping" color="#3fd7fd" />
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
