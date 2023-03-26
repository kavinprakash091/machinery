import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css';
import Header from './Header';

export default function FeaturedProjects() {
  return (
    <section className="featured-project-container">
      <div className="black-overlay3"> </div>
      <div className="featured-project">
        <Header heading1="FEATURED" heading2="PROJECTS" />
        <div className="featured-project-card-container">
          <div className="featured-project-card">
            <img
              src={require('../assets/curd_processing_unit.png')}
              alt="machine"
            />
            <div className="featured-project-name-container">
              <Link to="/machines">Curd Processing Unit</Link>
              <div className="featured-project-arrow">
                <i className="fa-solid fa-arrow-right right-arrow"></i>
              </div>
            </div>
          </div>
          <div className="featured-project-card">
            <img
              src={require('../assets/milk_pasteurization_plant.png')}
              alt="machine"
            />
            <div className="featured-project-name-container">
              <Link to="/machines">Milk Pasteurization Process</Link>
              <div className="featured-project-arrow">
                <i className="fa-solid fa-arrow-right right-arrow"></i>
              </div>
            </div>
          </div>
          <div className="featured-project-card">
            <img
              src={require('../assets/mini_dairy_plant.png')}
              alt="machine"
            />
            <div className="featured-project-name-container">
              <Link to="/machines">Paneer Making Machine</Link>
              <div className="featured-project-arrow">
                <i className="fa-solid fa-arrow-right right-arrow"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
