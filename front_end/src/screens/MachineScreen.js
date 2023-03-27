import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="machines-container">
        <div className="machine-header-container">
          <h1>Dairy Equipments</h1>
          <p>
            Pioneers in the industry, we offer Mini Dairy Plant, Paneer Press
            Machine, Curd Production From Milk, Paneer Making Machine, Milk
            Pasteurization Process and Stainless Steel Dairy Tank from India.
          </p>
        </div>
      </div>
    </section>
  );
}
