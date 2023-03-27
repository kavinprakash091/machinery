import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css';

export default function ProductLists() {
  return (
    <section className="machine-card-container">
      <div className="machine-card">
        <div className="machine-image-container">
          <img src={require('../assets/mini_dairy_plant.png')} alt="machine" />
        </div>{' '}
        <div className="machine-card-detail-container">
          <Link to="/machines/mini-dairy-plant" className="machine-name">
            Mini Dairy Plant{' '}
          </Link>{' '}
          <div className="review-container">
            <div className="star-container">
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star-half-stroke fa-beat"> </i>{' '}
              <i className="fa-regular fa-star fa-beat"> </i>{' '}
            </div>{' '}
            <p> 7 reviews </p>{' '}
          </div>{' '}
          <div className="available-products"> Available: 10 </div>{' '}
          <div className="machine-price"> Rs 20, 00, 000 / - </div>{' '}
          <button className="add-to-cart-button">
            ADD TO CART <i className="fa-solid fa-cart-shopping fa-shake"> </i>{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      <div className="machine-card">
        <div className="machine-image-container">
          <img src={require('../assets/mini_dairy_plant.png')} alt="machine" />
        </div>{' '}
        <div className="machine-card-detail-container">
          <Link to="/machines" className="machine-name">
            Mini Dairy Plant{' '}
          </Link>{' '}
          <div className="review-container">
            <div className="star-container">
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star-half-stroke fa-beat"> </i>{' '}
              <i className="fa-regular fa-star fa-beat"> </i>{' '}
            </div>{' '}
            <p> 7 reviews </p>{' '}
          </div>{' '}
          <div className="available-products"> Available: 10 </div>{' '}
          <div className="machine-price"> Rs 20, 00, 000 / - </div>{' '}
          <button
            type="button"
            className="add-to-cart-button out-of-stock"
            disabled
          >
            OUT OF STOCK{' '}
            <i class="fa-sharp fa-regular fa-face-frown-open fa-shake"> </i>{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      <div className="machine-card">
        <div className="machine-image-container">
          <img src={require('../assets/mini_dairy_plant.png')} alt="machine" />
        </div>{' '}
        <div className="machine-card-detail-container">
          <Link to="/machines" className="machine-name">
            Mini Dairy Plant{' '}
          </Link>{' '}
          <div className="review-container">
            <div className="star-container">
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star-half-stroke fa-beat"> </i>{' '}
              <i className="fa-regular fa-star fa-beat"> </i>{' '}
            </div>{' '}
            <p> 7 reviews </p>{' '}
          </div>{' '}
          <div className="available-products"> Available: 10 </div>{' '}
          <div className="machine-price"> Rs 20, 00, 000 / - </div>{' '}
          <button className="add-to-cart-button">
            ADD TO CART <i className="fa-solid fa-cart-shopping fa-shake"> </i>{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      <div className="machine-card">
        <div className="machine-image-container">
          <img src={require('../assets/mini_dairy_plant.png')} alt="machine" />
        </div>{' '}
        <div className="machine-card-detail-container">
          <Link to="/machines" className="machine-name">
            Mini Dairy Plant{' '}
          </Link>{' '}
          <div className="review-container">
            <div className="star-container">
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star-half-stroke fa-beat"> </i>{' '}
              <i className="fa-regular fa-star fa-beat"> </i>{' '}
            </div>{' '}
            <p> 7 reviews </p>{' '}
          </div>{' '}
          <div className="available-products"> Available: 10 </div>{' '}
          <div className="machine-price"> Rs 20, 00, 000 / - </div>{' '}
          <button className="add-to-cart-button">
            ADD TO CART <i className="fa-solid fa-cart-shopping fa-shake"> </i>{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      <div className="machine-card">
        <div className="machine-image-container">
          <img src={require('../assets/mini_dairy_plant.png')} alt="machine" />
        </div>{' '}
        <div className="machine-card-detail-container">
          <Link to="/machines" className="machine-name">
            Mini Dairy Plant{' '}
          </Link>{' '}
          <div className="review-container">
            <div className="star-container">
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star-half-stroke fa-beat"> </i>{' '}
              <i className="fa-regular fa-star fa-beat"> </i>{' '}
            </div>{' '}
            <p> 7 reviews </p>{' '}
          </div>{' '}
          <div className="available-products"> Available: 10 </div>{' '}
          <div className="machine-price"> Rs 20, 00, 000 / - </div>{' '}
          <button className="add-to-cart-button">
            ADD TO CART <i className="fa-solid fa-cart-shopping fa-shake"> </i>{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      <div className="machine-card">
        <div className="machine-image-container">
          <img src={require('../assets/mini_dairy_plant.png')} alt="machine" />
        </div>{' '}
        <div className="machine-card-detail-container">
          <Link to="/machines" className="machine-name">
            Mini Dairy Plant{' '}
          </Link>{' '}
          <div className="review-container">
            <div className="star-container">
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star-half-stroke fa-beat"> </i>{' '}
              <i className="fa-regular fa-star fa-beat"> </i>{' '}
            </div>{' '}
            <p> 7 reviews </p>{' '}
          </div>{' '}
          <div className="available-products"> Available: 10 </div>{' '}
          <div className="machine-price"> Rs 20, 00, 000 / - </div>{' '}
          <button className="add-to-cart-button">
            ADD TO CART <i className="fa-solid fa-cart-shopping fa-shake"> </i>{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      <div className="machine-card">
        <div className="machine-image-container">
          <img src={require('../assets/mini_dairy_plant.png')} alt="machine" />
        </div>{' '}
        <div className="machine-card-detail-container">
          <Link to="/machines" className="machine-name">
            Mini Dairy Plant{' '}
          </Link>{' '}
          <div className="review-container">
            <div className="star-container">
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star fa-beat"> </i>{' '}
              <i className="fa-solid fa-star-half-stroke fa-beat"> </i>{' '}
              <i className="fa-regular fa-star fa-beat"> </i>{' '}
            </div>{' '}
            <p> 7 reviews </p>{' '}
          </div>{' '}
          <div className="available-products"> Available: 10 </div>{' '}
          <div className="machine-price"> Rs 20, 00, 000 / - </div>{' '}
          <button className="add-to-cart-button">
            ADD TO CART <i className="fa-solid fa-cart-shopping fa-shake"> </i>{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}
