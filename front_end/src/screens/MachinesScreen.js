import React from 'react';
import ContactHeader from '../components/ContactHeader';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';
import ProductLists from '../components/ProductLists';
import Sidebar from '../components/Sidebar';
import data from '../data';
import '../styles/MachineScreen.css';

export default function MachinesScreen() {
  return (
    <section className="machine-page">
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="latest machines" />
      <Sidebar />
      <div className="machines-container">
        {data.products.map((product, index) => (
          <div className="product-machines-container" key={index}>
            <div className="machine-header-container">
              <h1> {product} </h1>
              <p> {data.product_description[index]} </p>
            </div>
            <ProductLists machines={data.product_details[index]} />
          </div>
        ))}
      </div>
    </section>
  );
}
