import Axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import ContactHeader from '../components/ContactHeader';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';
import Navbar from '../components/Navbar';
import NewsHome from '../components/NewsHome';
import PageHeader from '../components/PageHeader';
import ProductLists from '../components/ProductLists';
import Sidebar from '../components/Sidebar';
import { Store } from '../Store';
import '../styles/MachineScreen.css';
import { getError } from '../Utils';
import { toast } from 'react-toastify';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAILED':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default function MachinesScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userDetails, machine_list, cartItems } = state;

  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
  });

  useEffect(() => {
    window.scrollTo(0, 576);
  }, []);

  useEffect(() => {
    const fetchMachines = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await Axios.get('/machines');
        userDetails &&
          cartItems.map((cartItem) => {
            data
              .find((x) => x.name === cartItem.category)
              .product_details.map((y) => {
                if (y.name === cartItem.name) {
                  y.countInStocks = y.countInStocks - cartItem.quantity;
                }
              });
          });
        dispatch({ type: 'FETCH_SUCCESS' });
        localStorage.setItem('machineLists', JSON.stringify(data));
        ctxDispatch({ type: 'MACHINES_LISTS', payload: data });
        console.log(data);
      } catch (err) {
        dispatch({ type: 'FETCH_FAILED', error: getError(err) });
        toast.error(getError(err));
      }
    };
    fetchMachines();
  }, []);

  return (
    <section className="machine-page">
      {loading && (
        <div className="machine-loading">
          {' '}
          <Loading />
        </div>
      )}
      <div className="top-margin"></div>
      <PageHeader />
      <ContactHeader />
      <Navbar />
      <NewsHome content="latest machines" />
      <Sidebar />
      <div className="machines-container">
        {error && <MessageBox message={error} url="" color="#ff5454" />}
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
