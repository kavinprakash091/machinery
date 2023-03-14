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
      <section className="home-image-container"></section>
    </section>
  );
}
