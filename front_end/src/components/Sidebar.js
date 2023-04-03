import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MachineScreen.css';
import { Store } from '../Store';

export default function Sidebar() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { machine_list } = state;
  const [activeNav, setActiveNav] = useState(0);
  return (
    machine_list && (
      <nav className="sidebar">
        <div className="sidebar-header"> Our Product </div>
        <ul className="product-lists">
          {machine_list &&
            machine_list.map((product, index) => (
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
                      to={`/machine/${product.name
                        .toLowerCase()
                        .replace(/ /g, '-')}`}
                    >
                      {product.name}
                    </Link>
                    <p>
                      {product.product_details.length}
                      {product.product_details.length === 1
                        ? ' product available'
                        : ' products available'}
                    </p>
                  </div>
                  <div>
                    <i
                      className={
                        activeNav === index + 1
                          ? 'fa-solid fa-angle-up'
                          : 'fa-solid fa-angle-down'
                      }
                    ></i>
                  </div>
                </div>
                <ul
                  className={
                    activeNav === index + 1
                      ? 'sub-product-lists-active'
                      : 'sub-product-lists'
                  }
                >
                  {product.product_details.map((sub_product, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-angle-right"> </i>
                      <Link
                        to={`/machines/${sub_product.name
                          .toLowerCase()
                          .replace(/ /g, '-')}`}
                      >
                        {sub_product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          <li>
            <Link to="/machines" className="machine-view-all-button">
              <i className="fa-solid fa-plus"> </i> View all
            </Link>
          </li>
        </ul>
      </nav>
    )
  );
}
