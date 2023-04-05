import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import ContactHeader from '../components/ContactHeader';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';
import ProductLists from '../components/ProductLists';
import Sidebar from '../components/Sidebar';
import { Store } from '../Store';
import '../styles/MachineScreen.css';

export default function MachineScreen() {
  const { state, ctxDispatch: dispatch } = useContext(Store);
  const { machine_list } = state;
  const { machine_name } = useParams();
  var product_name;
  machine_name && (product_name = machine_name.replace(/-/g, ' '));

  var product_index = 0;
  machine_name &&
    machine_list &&
    machine_list.map((product, index) => {
      product.name.toLowerCase() === product_name && (product_index = index);
    });

  useEffect(() => {
    window.scrollTo(0, 500);
  }, []);

  return (
    <section className="machine-page">
      <Helmet>
        <title>Machines</title>
      </Helmet>
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="latest machines" />
      <Sidebar />
      <div className="machines-container">
        <div className="machine-header-container">
          <h1> {machine_list[product_index].name} </h1>
          <p>{machine_list[product_index].description}</p>
        </div>
        <ProductLists machines={machine_list[product_index].product_details} />
      </div>
    </section>
  );
}
