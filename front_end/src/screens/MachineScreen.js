import React from 'react';
import { useParams } from 'react-router-dom';
import ContactHeader from '../components/ContactHeader';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';
import ProductLists from '../components/ProductLists';
import Sidebar from '../components/Sidebar';
import data from '../data';
import '../styles/MachineScreen.css';

export default function MachineScreen() {
  const { machine_name } = useParams();
  var product_name;
  machine_name && (product_name = machine_name.replace(/-/g, ' '));

  var product_index = 0;
  machine_name &&
    data.products.map((product, index) => {
      product.toLowerCase() === product_name && (product_index = index);
    });

  return (
    <section className="machine-page">
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="latest machines" />
      <Sidebar />
      <div className="machines-container">
        <div className="machine-header-container">
          <h1> {data.products[product_index]} </h1>
          <p>{data.product_description[product_index]}</p>
        </div>
        <ProductLists machines={data.product_details[product_index]} />
      </div>
    </section>
  );
}
