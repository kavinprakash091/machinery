import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MachineScreen.css';
import data from '../data';

export default function Sidebar() {
  const [activeNav, setActiveNav] = useState(0);
  return (
    <section>
      <nav className="sidebar">
        <div className="sidebar-header"> Our Product </div>{' '}
        <ul className="product-lists">
          {data.products.map((product, index) => (
            <li key={index}>
              <div
                className="product-list-items"
                onClick={() =>
                  activeNav === index + 1
                    ? setActiveNav(0)
                    : setActiveNav(index + 1)
                }
              >
                <div>
                  <Link
                    to={`/machines/${product.toLowerCase().replace(/ /g, '-')}`}
                  >
                    {' '}
                    {product}{' '}
                  </Link>{' '}
                  <p>
                    {' '}
                    {data.sub_products[index].length}{' '}
                    {data.sub_products[index].length === 1
                      ? 'product available'
                      : 'products available'}{' '}
                  </p>{' '}
                </div>{' '}
                <div>
                  <i
                    className={
                      activeNav === index + 1
                        ? 'fa-solid fa-angle-up'
                        : 'fa-solid fa-angle-down'
                    }
                  ></i>{' '}
                </div>{' '}
              </div>{' '}
              <ul
                className={
                  activeNav === index + 1
                    ? 'sub-product-lists-active'
                    : 'sub-product-lists'
                }
              >
                {data.sub_products[index].map((sub_product) => (
                  <li key={sub_product}>
                    <i className="fa-solid fa-angle-right"> </i>{' '}
                    <Link
                      to={`/machines/${sub_product
                        .toLowerCase()
                        .replace(/ /g, '-')}`}
                    >
                      {' '}
                      {sub_product}{' '}
                    </Link>{' '}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <Link to="/machines" className="machine-view-all-button">
              <i className="fa-solid fa-plus"> </i> View all{' '}
            </Link>{' '}
          </li>{' '}
        </ul>{' '}
      </nav>{' '}
    </section>
  );
}
