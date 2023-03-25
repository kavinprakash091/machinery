import React from 'react';
import '../styles/HomeScreen.css';
import ContactHeader from '../components/ContactHeader';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import About from '../components/About';
import Home from '../components/Home';
import Footer from '../components/Footer';
import ContactFooter from '../components/ContactFooter';
import News from '../components/News';

export default function HomeScreen() {
  return (
    <section className="home-page">
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <Home />
      <About />
      <News />
      <ContactFooter />
      <Footer />
    </section>
  );
}
