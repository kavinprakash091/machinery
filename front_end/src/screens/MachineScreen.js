import React from 'react';
import { Link } from 'react-router-dom';
import ContactHeader from '../components/ContactHeader';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';
import Sidebar from '../components/Sidebar';
import '../styles/MachineScreen.css';

export default function MachineScreen() {
  return (
    <section className="machine-page">
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="latest machines" />
      <Sidebar />
      <div className="machines-container">
        <div className="machine-header-container">
          <h1>Dairy Equipments</h1>
          <p>
            Pioneers in the industry, we offer Mini Dairy Plant, Paneer Press
            Machine, Curd Production From Milk, Paneer Making Machine, Milk
            Pasteurization Process and Stainless Steel Dairy Tank from India.
          </p>
        </div>
        <div className="machine-card-container">
          <div className="machine-card">
            <div className="machine-image-container">
              <img
                src={require('../assets/mini_dairy_plant.png')}
                alt="machine"
              />
            </div>
            <div className="machine-card-detail-container">
              <Link to="/machines" className="machine-name">
                Mini Dairy Plant
              </Link>
              <div className="review-container">
                <div className="star-container">
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star-half-stroke fa-beat"></i>
                  <i className="fa-regular fa-star fa-beat"></i>
                </div>
                <p>7 reviews</p>
              </div>
              <div className="available-products">Available : 10</div>
              <div className="machine-price">Rs 20,00,000 /-</div>
              <button className="add-to-cart-button">
                ADD TO CART{' '}
                <i className="fa-solid fa-cart-shopping fa-shake"></i>
              </button>
            </div>
          </div>
          <div className="machine-card">
            <div className="machine-image-container">
              <img
                src={require('../assets/mini_dairy_plant.png')}
                alt="machine"
              />
            </div>
            <div className="machine-card-detail-container">
              <Link to="/machines" className="machine-name">
                Mini Dairy Plant
              </Link>
              <div className="review-container">
                <div className="star-container">
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star-half-stroke fa-beat"></i>
                  <i className="fa-regular fa-star fa-beat"></i>
                </div>
                <p>7 reviews</p>
              </div>
              <div className="available-products">Available : 10</div>
              <div className="machine-price">Rs 20,00,000 /-</div>
              <button
                type="button"
                className="add-to-cart-button out-of-stock"
                disabled
              >
                OUT OF STOCK{' '}
                <i class="fa-sharp fa-regular fa-face-frown-open fa-shake"></i>
              </button>
            </div>
          </div>
          <div className="machine-card">
            <div className="machine-image-container">
              <img
                src={require('../assets/mini_dairy_plant.png')}
                alt="machine"
              />
            </div>
            <div className="machine-card-detail-container">
              <Link to="/machines" className="machine-name">
                Mini Dairy Plant
              </Link>
              <div className="review-container">
                <div className="star-container">
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star-half-stroke fa-beat"></i>
                  <i className="fa-regular fa-star fa-beat"></i>
                </div>
                <p>7 reviews</p>
              </div>
              <div className="available-products">Available : 10</div>
              <div className="machine-price">Rs 20,00,000 /-</div>
              <button className="add-to-cart-button">
                ADD TO CART{' '}
                <i className="fa-solid fa-cart-shopping fa-shake"></i>
              </button>
            </div>
          </div>
          <div className="machine-card">
            <div className="machine-image-container">
              <img
                src={require('../assets/mini_dairy_plant.png')}
                alt="machine"
              />
            </div>
            <div className="machine-card-detail-container">
              <Link to="/machines" className="machine-name">
                Mini Dairy Plant
              </Link>
              <div className="review-container">
                <div className="star-container">
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star-half-stroke fa-beat"></i>
                  <i className="fa-regular fa-star fa-beat"></i>
                </div>
                <p>7 reviews</p>
              </div>
              <div className="available-products">Available : 10</div>
              <div className="machine-price">Rs 20,00,000 /-</div>
              <button className="add-to-cart-button">
                ADD TO CART{' '}
                <i className="fa-solid fa-cart-shopping fa-shake"></i>
              </button>
            </div>
          </div>
          <div className="machine-card">
            <div className="machine-image-container">
              <img
                src={require('../assets/mini_dairy_plant.png')}
                alt="machine"
              />
            </div>
            <div className="machine-card-detail-container">
              <Link to="/machines" className="machine-name">
                Mini Dairy Plant
              </Link>
              <div className="review-container">
                <div className="star-container">
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star-half-stroke fa-beat"></i>
                  <i className="fa-regular fa-star fa-beat"></i>
                </div>
                <p>7 reviews</p>
              </div>
              <div className="available-products">Available : 10</div>
              <div className="machine-price">Rs 20,00,000 /-</div>
              <button className="add-to-cart-button">
                ADD TO CART{' '}
                <i className="fa-solid fa-cart-shopping fa-shake"></i>
              </button>
            </div>
          </div>
          <div className="machine-card">
            <div className="machine-image-container">
              <img
                src={require('../assets/mini_dairy_plant.png')}
                alt="machine"
              />
            </div>
            <div className="machine-card-detail-container">
              <Link to="/machines" className="machine-name">
                Mini Dairy Plant
              </Link>
              <div className="review-container">
                <div className="star-container">
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star-half-stroke fa-beat"></i>
                  <i className="fa-regular fa-star fa-beat"></i>
                </div>
                <p>7 reviews</p>
              </div>
              <div className="available-products">Available : 10</div>
              <div className="machine-price">Rs 20,00,000 /-</div>
              <button className="add-to-cart-button">
                ADD TO CART{' '}
                <i className="fa-solid fa-cart-shopping fa-shake"></i>
              </button>
            </div>
          </div>
          <div className="machine-card">
            <div className="machine-image-container">
              <img
                src={require('../assets/mini_dairy_plant.png')}
                alt="machine"
              />
            </div>
            <div className="machine-card-detail-container">
              <Link to="/machines" className="machine-name">
                Mini Dairy Plant
              </Link>
              <div className="review-container">
                <div className="star-container">
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star fa-beat"></i>
                  <i className="fa-solid fa-star-half-stroke fa-beat"></i>
                  <i className="fa-regular fa-star fa-beat"></i>
                </div>
                <p>7 reviews</p>
              </div>
              <div className="available-products">Available : 10</div>
              <div className="machine-price">Rs 20,00,000 /-</div>
              <button className="add-to-cart-button">
                ADD TO CART{' '}
                <i className="fa-solid fa-cart-shopping fa-shake"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
