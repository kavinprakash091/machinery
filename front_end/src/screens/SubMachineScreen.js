import React from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../components/Comment';
import ContactHeader from '../components/ContactHeader';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';
import ProductDetails from '../components/ProductDetails';
import ProductLists from '../components/ProductLists';
import RelatedImages from '../components/RelatedImages';
import RelatedVideos from '../components/RelatedVideos';
import Sidebar from '../components/Sidebar';
import data from '../data';
import '../styles/MachineScreen.css';

export default function SubMachineScreen() {
  const { machine_name } = useParams();
  const product_name = machine_name.replace(/-/g, ' ');
  var product_details, product_detail;
  data.sub_products.map((product, x) => {
    product.map((sub_product, y) => {
      if (sub_product.toLowerCase() === product_name) {
        product_details = data.product_details[x][y];
        product_detail = data.product_details[x];
      }
    });
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
          <h1>{product_details.name} </h1> <p>{product_details.description}</p>{' '}
        </div>{' '}
        <ProductDetails product_detail={product_details} />
        <ProductLists machines={product_detail} />
        <RelatedImages
          icon="fa-solid fa-camera fa-shake"
          heading="Related Images"
        />
        <RelatedVideos />
        <RelatedImages
          icon="fa-solid fa-map fa-shake"
          heading="Related Bluprints"
        />
        <Comment />
      </div>
    </section>
  );
}
