import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css';
import data from '../data';

export default function ProductLists() {
  return (
    <section className="machine-card-container">
      {' '}
      {data.product_details[0].map((product) => (
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
            <div className="review-container">
              <div className="star-container">
                <i className="fa-solid fa-star fa-beat"> </i>{' '}
                <i className="fa-solid fa-star fa-beat"> </i>{' '}
                <i className="fa-solid fa-star fa-beat"> </i>{' '}
                <i className="fa-solid fa-star-half-stroke fa-beat"> </i>{' '}
                <i className="fa-regular fa-star fa-beat"> </i>
              </div>
              <p> {product.numReviews} reviews </p>
            </div>
            <div className="available-products">
              Available: {product.countInStocks}
            </div>
            <div className="machine-price"> Rs {product.price} / - </div>
            <button className="add-to-cart-button">
              ADD TO CART{' '}
              <i className="fa-solid fa-cart-shopping fa-shake"> </i>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
