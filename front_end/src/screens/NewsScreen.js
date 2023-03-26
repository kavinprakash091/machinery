import React from 'react';
import ContactHeader from '../components/ContactHeader';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';
import ContactFooter from '../components/ContactFooter';
import Footer from '../components/Footer';

export default function NewsScreen() {
  return (
    <section className="news-page">
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="latest news" />
      <LatestNews />
      <ContactFooter />
      <Footer />
    </section>
  );
}
