import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/MachineScreen.css';
import Ratings from './Ratings';
import { Store } from '../Store';

export default function ProductDetails({ product_detail }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
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
          Available:{' '}
          {product_detail.countInStocks === 0 ? (
            <span className="out-of-stock-batch">Unavailable</span>
          ) : (
            <span className="available-batch">In Stock</span>
          )}
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
        {product_detail.countInStocks === 0 ? (
          <button
            type="button"
            className="add-to-cart-button1 out-of-stock"
            disabled
          >
            OUT OF STOCK
          </button>
        ) : (
          <button
            className="add-to-cart-button1"
            onClick={() => {
              userDetails
                ? addToCartHandler(
                    product_detail.category,
                    product_detail.name,
                    product_detail.price
                  )
                : navigate('/sign-in');
            }}
          >
            ADD TO CART <i className="fa-solid fa-cart-shopping fa-shake"> </i>
          </button>
        )}
      </div>
    </section>
  );
}
