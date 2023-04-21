import React, { useEffect } from 'react';
import ContactHeader from '../components/ContactHeader';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';
import ContactFooter from '../components/ContactFooter';
import Footer from '../components/Footer';

export default function NewsScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="news-page">
      <div className="top-margin"> </div> <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="latest news" />
      <LatestNews />
      <ContactFooter />
      <Footer />
    </section>
  );
}
