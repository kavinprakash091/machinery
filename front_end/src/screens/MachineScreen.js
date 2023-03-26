import React from 'react';
import ContactHeader from '../components/ContactHeader';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';
import Sidebar from '../components/Sidebar';
import '../styles/MachineScreen.css';

export default function MachineScreen() {
  return (
    <section className="machine-page">
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="latest machines" />
      <Sidebar />
    </section>
  );
}
