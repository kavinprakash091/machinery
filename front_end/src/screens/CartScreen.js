import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactFooter from '../components/ContactFooter';
import ContactHeader from '../components/ContactHeader';
import Footer from '../components/Footer';
import MessageBox from '../components/MessageBox';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';
import '../styles/CartScreen.css';
import { Store } from '../Store';

const reducer = (state, action) => {
  switch (action.type) {
    case 'OUT_OF_STOCK':
      return { ...state, error: action.error };
    case 'PRODUCT_AVAILABLE':
      return { ...state, error: '' };
    default:
      return state;
  }
};

export default function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { machine_list, cartItems } = state;

  const [{ error }, dispatch] = useReducer(reducer, { error: '' });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);

  const removeCartHandler = (product_name) => {
    const cartItemsList = cartItems.filter((x) => {
      return x.name !== product_name;
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItemsList));
    ctxDispatch({ type: 'REMOVE_FROM_CART', payload: cartItemsList });
  };

  const productIncrementHandler = (product_name, product_category) => {
    var countInStocks = 0;
    machine_list
      .find((x) => x.name === product_category)
      .product_details.map((y) => {
        if (y.name === product_name && y.countInStocks > 0) {
          countInStocks = y.countInStocks;
          y.countInStocks = y.countInStocks - 1;
        }
      });

    cartItems.map((x) => {
      if (x.name === product_name) {
        if (countInStocks > 0) {
          x.quantity = x.quantity + 1;
          dispatch({ type: 'PRODUCT_AVAILABLE' });
        } else {
          dispatch({ type: 'OUT_OF_STOCK', error: 'Product Unavailable' });
        }
      }
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('machineLists', JSON.stringify(machine_list));
    ctxDispatch({ type: 'MACHINES_LISTS', payload: machine_list });
    ctxDispatch({ type: 'ADD_TO_CART', payload: cartItems });
  };

  const productDecrementHandler = (product_name, product_category) => {
    var countInStocks = 0;
    machine_list
      .find((x) => x.name === product_category)
      .product_details.map((y) => {
        if (y.name === product_name) {
          countInStocks = y.countInStocks;
          y.countInStocks = y.countInStocks + 1;
        }
      });
    dispatch({ type: 'PRODUCT_AVAILABLE' });

    cartItems.map((x) => {
      if (x.name === product_name) {
        if (x.quantity > 0) {
          x.quantity = x.quantity - 1;
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          localStorage.setItem('machineLists', JSON.stringify(machine_list));
          ctxDispatch({ type: 'MACHINES_LISTS', payload: machine_list });
          ctxDispatch({ type: 'ADD_TO_CART', payload: cartItems });
        } else {
          const cartItemsList = cartItems.filter((x) => {
            return x.name !== product_name;
          });
          localStorage.setItem('cartItems', JSON.stringify(cartItemsList));
          ctxDispatch({ type: 'REMOVE_FROM_CART', payload: cartItemsList });
        }
      }
    });
  };

  return (
    <section className="cart-page">
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="shopping cart" />
      <div className="cart-header">
        <h1>
          <i class="fa-solid fa-cart-shopping fa-shake"></i> {'  '}
          Shopping <span className="important">Cart</span>
        </h1>
        <Link to="/machines">
          <i className="fa-solid fa-plus"></i> Add More Items
        </Link>
      </div>
      {cartItems.length === 0 && (
        <MessageBox message="Cart empty" url="Go to Shopping" color="#3fd7fd" />
      )}
      {error && (
        <MessageBox message={error} url="" color="#ff8282" close={false} />
      )}
      <div className="cart-container">
        {cartItems.length > 0 && (
          <div className="cart-container">
            <div className="cart-items-container">
              {cartItems.map((cartItem) =>
                machine_list
                  .find((product) => product.name === cartItem.category)
                  .product_details.map(
                    (product_detail) =>
                      product_detail.name === cartItem.name && (
                        <div className="cart-item-card" key={cartItem.name}>
                          <div className="cart-item-image">
                            <img
                              src={product_detail.image}
                              alt={product_detail.name}
                            />
                          </div>
                          <div className="cart-item-name">
                            <Link
                              to={`/machines/${product_detail.name
                                .toLowerCase()
                                .replace(/ /g, '-')}`}
                            >
                              {product_detail.name}
                            </Link>
                          </div>
                          <div className="cart-item-quantity">
                            <i
                              className="fa-solid fa-circle-plus"
                              onClick={() =>
                                productIncrementHandler(
                                  product_detail.name,
                                  product_detail.category
                                )
                              }
                            ></i>{' '}
                            <span>{cartItem.quantity} </span>
                            <i
                              className="fa-solid fa-circle-minus"
                              onClick={() =>
                                productDecrementHandler(
                                  product_detail.name,
                                  product_detail.category
                                )
                              }
                            ></i>
                          </div>
                          <div className="cart-item-price">
                            Rs {product_detail.price} /-
                          </div>
                          <div className="cart-item-remove">
                            <i
                              className="fa-solid fa-trash-can"
                              onClick={() =>
                                removeCartHandler(product_detail.name)
                              }
                            ></i>
                          </div>
                        </div>
                      )
                  )
              )}
            </div>
            <div className="sub-total-container">
              <h1>
                Subtotal ({cartItems.reduce((s, a) => s + a.quantity, 0)}{' '}
                {cartItems.length === 1 ? 'item' : 'items'}) :
              </h1>
              <h1>
                Rs{' '}
                {cartItems
                  .reduce((s, a) => s + a.quantity * a.price, 0)
                  .toLocaleString('en-US')}{' '}
                /-
              </h1>
              <Link to="/shipping" className="proceed-to-checkout-button">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
      <ContactFooter />
      <Footer />
    </section>
  );
}
