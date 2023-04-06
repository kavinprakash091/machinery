import React, { useContext, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/HomeScreen.css';
import Ratings from './Ratings';
import { Store } from '../Store';

export default function ProductLists({ machines }) {
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails, machine_list, cartItems } = state;

  const addToCartHandler = (product_category, product_name, product_price) => {
    const existItem = cartItems.find((x) => x.name === product_name);
    var countInStocks = 0;
    machine_list
      .find((x) => x.name === product_category)
      .product_details.map((y) => {
        if (y.name === product_name) {
          countInStocks = y.countInStocks;
          y.countInStocks = y.countInStocks - 1;
        }
      });

    if (existItem) {
      cartItems.map((x) => {
        if (x.name === product_name) {
          if (countInStocks > 0) {
            x.quantity = x.quantity + 1;
          }
        }
      });
    } else {
      cartItems.push({
        category: product_category,
        name: product_name,
        price: product_price,
        quantity: 1,
      });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('machineLists', JSON.stringify(machine_list));
    ctxDispatch({ type: 'MACHINES_LISTS', payload: machine_list });
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
            <div className="machine-price">
              {' '}
              Rs {product.price.toLocaleString('en-US')} / -{' '}
            </div>
            {product.countInStocks === 0 ? (
              <button
                type="button"
                className="add-to-cart-button out-of-stock"
                disabled
              >
                OUT OF STOCK
              </button>
            ) : (
              <button
                className="add-to-cart-button"
                onClick={() => {
                  userDetails
                    ? addToCartHandler(
                        product.category,
                        product.name,
                        product.price
                      )
                    : navigate('/sign-in');
                }}
              >
                ADD TO CART{' '}
                <i className="fa-solid fa-cart-shopping fa-shake"> </i>
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
