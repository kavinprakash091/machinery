import Axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import ContactHeader from '../components/ContactHeader';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';
import ProductLists from '../components/ProductLists';
import Sidebar from '../components/Sidebar';
import { Store } from '../Store';
import '../styles/MachineScreen.css';
import { getError } from '../Utils';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAILED':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function MachinesScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { machine_list } = state;
  console.log(machine_list);

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });
  useEffect(() => {
    const fetchMachines = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await Axios.get('/machines');
        dispatch({ type: 'FETCH_SUCCESS' });
        ctxDispatch({ type: 'MACHINES_LISTS', payload: data });
      } catch (err) {
        alert(getError(err));
        dispatch({ type: 'FETCH_FAILED' });
      }
    };
    fetchMachines();
  }, []);

  machine_list &&
    machine_list.map((product, index) =>
      console.log(product.name + ' ' + product.description)
    );
  return (
    <section className="machine-page">
      {loading && <Loading />}
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="latest machines" />
      <Sidebar />
      <div className="machines-container">
        {machine_list &&
          machine_list.map((product, index) => (
            <div className="product-machines-container" key={index}>
              <div className="machine-header-container">
                <h1> {product.name} </h1> <p> {product.description} </p>
              </div>
              <ProductLists machines={product.product_details} />
            </div>
          ))}
      </div>
    </section>
  );
}
