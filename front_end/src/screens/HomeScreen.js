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
import NewsLetter from '../components/NewsLetter';
import Sponsors from '../components/Sponsors';
import Team from '../components/Team';
import ContactProject from '../components/ContactProject';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';
import { Helmet } from 'react-helmet-async';

export default function HomeScreen() {
  return (
    <section className="home-page">
      <Helmet>
        <title> Company Name </title>
      </Helmet>
      <div className="top-margin"></div>
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <Home />
      <About />
      <FeaturedProjects />
      <Services />
      <ContactProject />
      <Team />
      <News />
      <NewsLetter />
      <Sponsors />
      <ContactFooter />
      <Footer />
    </section>
  );
}
