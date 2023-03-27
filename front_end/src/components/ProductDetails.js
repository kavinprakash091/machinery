import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MachineScreen.css';

export default function ProductDetails() {
  return (
    <section className="machine-detail-container">
      <div className="machine-detail-left-section">
        <img src={require('../assets/mini_dairy_plant.png')} alt="machine" />
      </div>
      <div className="machine-detail-right-section">
        <Link to="/machines/mini-dairy-plant" className="machine-name1">
          Mini Dairy Plant{' '}
        </Link>{' '}
        <div className="review-container1">
          <div className="star-container1">
            <i className="fa-solid fa-star fa-beat"> </i>{' '}
            <i className="fa-solid fa-star fa-beat"> </i>{' '}
            <i className="fa-solid fa-star fa-beat"> </i>{' '}
            <i className="fa-solid fa-star-half-stroke fa-beat"> </i>{' '}
            <i className="fa-regular fa-star fa-beat"> </i>{' '}
          </div>{' '}
          <p> 7 reviews </p>{' '}
        </div>{' '}
        <div className="available-products1"> Available: 10 </div>{' '}
        <div className="machine-price1"> Rs 20, 00, 000 / - </div>{' '}
        <div className="minimum-order-quantity">
          Minimum order quantity : <span>1 Piece</span>
        </div>
        <div className="machine-information-container">
          <table className="machine-detail-table">
            <tr>
              <td>Usage/Application</td>
              <td>Milk</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Wood</td>
            </tr>
            <tr>
              <td>Capacity</td>
              <td>20 - 100 Kgs</td>
            </tr>
            <tr>
              <td>Equipment Type</td>
              <td>Mini Dairy Plant</td>
            </tr>
            <tr>
              <td>Material</td>
              <td>Stainless Steel</td>
            </tr>
            <tr>
              <td>Machine Body Material</td>
              <td>Stainless Steel</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Company Name</td>
            </tr>
            <tr>
              <td>Design Type</td>
              <td>Customized</td>
            </tr>
            <tr>
              <td>Automatic Grade</td>
              <td>Semi-Automatic</td>
            </tr>
            <tr>
              <td>Automation Grade</td>
              <td>Semi-Automatic</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>Default</td>
            </tr>
            <tr>
              <td>Operated By</td>
              <td>Automatic</td>
            </tr>
            <tr>
              <td>Orientation</td>
              <td>Horizontal</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>Air Pneumatic</td>
            </tr>
            <tr>
              <td>Voltage</td>
              <td>220</td>
            </tr>
          </table>
          <p>
            In order to keep pace with the never-ending demands of customers, we
            are involved in offering a wide range of Paneer Press Machine.
          </p>
          <h2>Additional Information</h2>
          <ul>
            <li>Item Code: 002</li>
            <li>Production Capacity: 20 - 100 Kgs</li>
            <li>Delivery Time: 1'Week</li>
            <li>Packaging Details: wood</li>
          </ul>
        </div>
        <button className="add-to-cart-button1">
          ADD TO CART <i className="fa-solid fa-cart-shopping fa-shake"> </i>{' '}
        </button>{' '}
      </div>
    </section>
  );
}
