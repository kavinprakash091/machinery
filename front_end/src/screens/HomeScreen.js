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
          <section className="home-left-section"></section>
          <section className="home-right-section"></section>
        </section>
      </main>
    </section>
  );
}
