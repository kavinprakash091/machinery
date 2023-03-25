import React from 'react';
import ContactHeader from '../components/ContactHeader';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';

export default function NewsScreen() {
  return (
    <section className="news-page">
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome />
      <LatestNews />
    </section>
  );
}
