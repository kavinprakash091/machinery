import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css';
import Ratings from './Ratings';
import { Store } from '../Store';

export default function ProductLists({ machines }) {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cartItems } = state;

  const addToCartHandler = (product_category, product_name) => {
    const existItem = cartItems.find((x) => x.name === product_name);
    if (existItem) {
      cartItems.map((x) => {
        if (x.name === product_name) {
          x.quantity = x.quantity + 1;
        }
      });
    } else {
      cartItems.push({
        category: product_category,
        name: product_name,
        quantity: 1,
      });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    ctxDispatch({ type: 'ADD_TO_CART', payload: cartItems });
  };

  return (
    <section className="machine-card-container">
      {machines.map((product) => (
        <div className="machine-card" key={product.name}>
          <div className="machine-image-container">
            <img src={product.image} alt={product.name} />{' '}
          </div>{' '}
          <div className="machine-card-detail-container">
            <Link
              to={`/machines/${product.name.toLowerCase().replace(/ /g, '-')}`}
              className="machine-name"
            >
              {product.name}
            </Link>{' '}
            <Ratings
              ratings={product.ratings}
              numReviews={product.numReviews}
            />
            <div className="available-products">
              Available: {product.countInStocks}
            </div>
            <div className="machine-price"> Rs {product.price} / - </div>
            <button
              className="add-to-cart-button"
              onClick={() => addToCartHandler(product.category, product.name)}
            >
              ADD TO CART{' '}
              <i className="fa-solid fa-cart-shopping fa-shake"> </i>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
