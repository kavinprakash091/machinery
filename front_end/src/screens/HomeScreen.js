import React from 'react';
import ContactHeader from '../components/ContactHeader';
import PageHeader from '../components/PageHeader';

export default function HomeScreen() {
  return (
    <section className="home-page">
      <PageHeader />
      <ContactHeader />
    </section>
  );
}
