import React from 'react';
import '../styles/HomeScreen.css';
import ContactHeader from '../components/ContactHeader';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';

export default function HomeScreen() {
  return (
    <section className="home-page">
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <main className="home-image-container">
        <div className="black-overlay"></div>
        <section className="home-details-container">
          <section className="home-left-section">
            <div className="left-content">
              <h1>
                <span className="important">Hurry!&nbsp;</span> Welcome you to
                our page
              </h1>

              <h2>Helping you with best Machinery</h2>
              <p>
                Provides you with all the spare tools, machineries and services.
                We are of 100% trust worthy in materialistic products. Lucky to
                be one to purchase here !
              </p>
              <button> Explore </button>
            </div>
          </section>
          <section className="home-right-section">
            <img src={require('../assets/engineer.png')} alt="engineer" />
          </section>
        </section>
      </main>
    </section>
  );
}
