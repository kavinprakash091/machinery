import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css';
import Header from './Header';

export default function News() {
  return (
    <section className="latest-news-container">
      <Header heading1="LATEST" heading2="NEWS" />
      <div className="news-details-container">
        <div className="news-card-image">
          <img src={require('../assets/news_image1.png')} alt="news1" />
          <div className="news-link-container">
            <span>
              <i className="fa-solid fa-calendar-days fa-shake"></i> 12.03.2023
            </span>
            <Link to="/news">News1</Link>
          </div>
        </div>
        <div className="news-card-image">
          <img src={require('../assets/news_image2.png')} alt="news2" />
          <div className="news-link-container">
            <span>
              <i className="fa-solid fa-calendar-days fa-shake"></i> 12.03.2023
            </span>
            <Link to="/news">News1</Link>
          </div>
        </div>
        <div className="news-card-image">
          <img src={require('../assets/news_image3.png')} alt="news3" />
          <div className="news-link-container">
            <span>
              <i className="fa-solid fa-calendar-days fa-shake"></i> 12.03.2023
            </span>
            <Link to="/news">News1</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
