import React, { useContext } from 'react';
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
import { Store } from '../Store';
import '../styles/MachineScreen.css';

export default function SubMachineScreen() {
  const { state, ctxDispatch: dispatch } = useContext(Store);
  const { machine_list } = state;
  const { machine_name } = useParams();
  const product_name = machine_name.replace(/-/g, ' ');
  var product_details;
  machine_list &&
    machine_list.map((product, x) => {
      product.product_details.map((sub_product, y) => {
        if (sub_product.name.toLowerCase() === product_name) {
          product_details = sub_product;
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
        <h1 className="machine-parts-header">
          <i className="fa-solid fa-wrench fa-shake"></i> Machine Parts
        </h1>
        <ProductLists machines={product_details.sub_product} />
        <RelatedImages
          icon="fa-solid fa-camera fa-shake"
          heading="Related Images"
          relatedImages={product_details.related_image}
        />
        <RelatedVideos relatedVideos={product_details.related_video} />
        <RelatedImages
          icon="fa-solid fa-map fa-shake"
          heading="Related Bluprints"
          relatedImages={product_details.related_blueprint}
        />
        <Comment comments={product_details.comments} />
      </div>
    </section>
  );
}
