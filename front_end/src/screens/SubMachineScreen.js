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
  console.log(product_name);
  var product_details;
  data.sub_products.map((product, x) => {
    product.map((sub_product, y) => {
      sub_product.toLowerCase() === product_name &&
        (product_details = data.product_details[x][y]);
    });
  });

  console.log(product_details);

  return (
    <section className="machine-page">
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="latest machines" />
      <Sidebar />
      <div className="machines-container">
        <div className="machine-header-container">
          <h1>Mini Dairy Plant </h1>{' '}
          <p>
            Pioneers in the industry, we offer Mini Dairy Plant, Paneer Press
            Machine, Curd Production From Milk, Paneer Making Machine, Milk
            Pasteurization Process and Stainless Steel Dairy Tank from India.{' '}
          </p>{' '}
        </div>{' '}
        <ProductDetails product_detail={product_details} />
        <ProductLists />
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
