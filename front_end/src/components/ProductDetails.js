import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MachineScreen.css';
import Ratings from './Ratings';

export default function ProductDetails({ product_detail }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <section className="machine-detail-container">
      <div className="machine-detail-left-section">
        <img src={product_detail.image} alt={product_detail.name} />
        <div className="machine-like-container">
          <div
            className={isLiked ? 'machine-like machine-liked' : 'machine-like'}
          >
            <i
              onClick={() => setIsLiked(!isLiked)}
              className={
                isLiked
                  ? 'fa-solid fa-heart fa-beat'
                  : 'fa-regular fa-heart fa-beat'
              }
            ></i>{' '}
            {product_detail.likes}{' '}
            {product_detail.likes === 1 ? 'Like' : 'Likes'}
          </div>
          <div className="machine-share">
            <Link to="#">
              <i className="fa-solid fa-share-nodes"></i> Share
            </Link>
          </div>
        </div>
      </div>
      <div className="machine-detail-right-section">
        <Link
          to={`/machines/${product_detail.name
            .toLowerCase()
            .replace(/ /g, '-')}`}
          className="machine-name1"
        >
          {product_detail.name}
        </Link>{' '}
        <Ratings
          ratings={product_detail.ratings}
          numReviews={product_detail.numReviews}
        />
        <div className="available-products1">
          {' '}
          Available: {product_detail.countInStocks}{' '}
        </div>{' '}
        <div className="machine-price1"> Rs {product_detail.price} / - </div>{' '}
        <div className="minimum-order-quantity">
          Minimum order quantity : <span>1 Piece</span>
        </div>
        <div className="machine-information-container">
          <table className="machine-detail-table">
            {product_detail.details[0].map((x, index) => (
              <tr key={index}>
                <td>{x}</td>
                <td>{product_detail.details[1][index]}</td>
              </tr>
            ))}
          </table>
          {product_detail.description !== '' && (
            <p>{product_detail.description}</p>
          )}

          {product_detail.additional_information.length !== 0 && (
            <div>
              <h2>Additional Information</h2>
              <ul>
                {product_detail.additional_information.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button className="add-to-cart-button1">
          ADD TO CART <i className="fa-solid fa-cart-shopping fa-shake"> </i>{' '}
        </button>{' '}
      </div>
    </section>
  );
}
