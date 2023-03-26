import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MachineScreen.css';

export default function Sidebar() {
  const [activeNav, setActiveNav] = useState(0);
  return (
    <nav className="sidebar">
      <div className="sidebar-header">Our Product</div>
      <ul className="product-lists">
        <li>
          <div
            className="product-list-items"
            onClick={() =>
              activeNav === 1 ? setActiveNav(0) : setActiveNav(1)
            }
          >
            <div>
              <Link to="#">Dairy Equipments</Link>
              <p>7 products available</p>
            </div>
            <div>
              <i
                className={
                  activeNav === 1
                    ? 'fa-solid fa-angle-up'
                    : 'fa-solid fa-angle-down'
                }
              ></i>
            </div>
          </div>
          <ul
            className={
              activeNav === 1 ? 'sub-product-lists-active' : 'sub-product-lists'
            }
          >
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Mini Dairy Plant</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Paneer Press Machine</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Curd Production From Milk</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Paneer Making Machine</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Milk Pasteurization Process</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Stainless Steel Dairy Tank</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Curd Processing Unit</Link>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="product-list-items"
            onClick={() =>
              activeNav === 2 ? setActiveNav(0) : setActiveNav(2)
            }
          >
            <div>
              <Link to="#">Milk Processing Plant</Link>
              <p>4 products available</p>
            </div>
            <div>
              <i
                className={
                  activeNav === 2
                    ? 'fa-solid fa-angle-up'
                    : 'fa-solid fa-angle-down'
                }
              ></i>
            </div>
          </div>
          <ul
            className={
              activeNav === 2 ? 'sub-product-lists-active' : 'sub-product-lists'
            }
          >
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Industrial Milk Processing Plant</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Mini Milk Processing Plant</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Dairy Milk Processing Plant</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Curd Processing Plant</Link>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="product-list-items"
            onClick={() =>
              activeNav === 3 ? setActiveNav(0) : setActiveNav(3)
            }
          >
            <div>
              <Link to="#">Curd Making Plant</Link>
              <p>5 products available</p>
            </div>
            <div>
              <i
                className={
                  activeNav === 3
                    ? 'fa-solid fa-angle-up'
                    : 'fa-solid fa-angle-down'
                }
              ></i>
            </div>
          </div>
          <ul
            className={
              activeNav === 3 ? 'sub-product-lists-active' : 'sub-product-lists'
            }
          >
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Commercial Curd Making Plant</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Dairy Curd Making Plant</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Curd For Plant</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Curd Making Plant</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Mini Curd Making Plant</Link>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="product-list-items"
            onClick={() =>
              activeNav === 4 ? setActiveNav(0) : setActiveNav(4)
            }
          >
            <div>
              {' '}
              <Link to="#">Milk Pasteurization Units</Link>
              <p>3 products available</p>
            </div>
            <div>
              <i
                className={
                  activeNav === 4
                    ? 'fa-solid fa-angle-up'
                    : 'fa-solid fa-angle-down'
                }
              ></i>
            </div>
          </div>
          <ul
            className={
              activeNav === 4 ? 'sub-product-lists-active' : 'sub-product-lists'
            }
          >
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Milk Pasteurization Unit</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Milk Pasteurization</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Milk Pasteurisation</Link>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="product-list-items"
            onClick={() =>
              activeNav === 5 ? setActiveNav(0) : setActiveNav(5)
            }
          >
            <div>
              {' '}
              <Link to="#">Milk Condensing Machine</Link>
              <p>1 product available</p>
            </div>
            <div>
              <i
                className={
                  activeNav === 5
                    ? 'fa-solid fa-angle-up'
                    : 'fa-solid fa-angle-down'
                }
              ></i>
            </div>
          </div>
          <ul
            className={
              activeNav === 5 ? 'sub-product-lists-active' : 'sub-product-lists'
            }
          >
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">500LPH Milk Condensing Machine</Link>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="product-list-items"
            onClick={() =>
              activeNav === 6 ? setActiveNav(0) : setActiveNav(6)
            }
          >
            <div>
              {' '}
              <Link to="#">Milk And Dairy Plant</Link>
              <p>2 products available</p>
            </div>
            <div>
              <i
                className={
                  activeNav === 6
                    ? 'fa-solid fa-angle-up'
                    : 'fa-solid fa-angle-down'
                }
              ></i>
            </div>
          </div>
          <ul
            className={
              activeNav === 6 ? 'sub-product-lists-active' : 'sub-product-lists'
            }
          >
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Curd Incubation Process</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Milk Processing Plant</Link>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="product-list-items"
            onClick={() =>
              activeNav === 7 ? setActiveNav(0) : setActiveNav(7)
            }
          >
            <div>
              <Link to="#">Dairy Products Making Machine</Link>
              <p>1 product available</p>
            </div>
            <div>
              <i
                className={
                  activeNav === 7
                    ? 'fa-solid fa-angle-up'
                    : 'fa-solid fa-angle-down'
                }
              ></i>
            </div>
          </div>
          <ul
            className={
              activeNav === 7 ? 'sub-product-lists-active' : 'sub-product-lists'
            }
          >
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Ghee Vat Making Machine</Link>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="product-list-items"
            onClick={() =>
              activeNav === 8 ? setActiveNav(0) : setActiveNav(8)
            }
          >
            <div>
              <Link to="#">Chilling Plant</Link>
              <p>1 product available</p>
            </div>
            <div>
              <i
                className={
                  activeNav === 8
                    ? 'fa-solid fa-angle-up'
                    : 'fa-solid fa-angle-down'
                }
              ></i>
            </div>
          </div>
          <ul
            className={
              activeNav === 8 ? 'sub-product-lists-active' : 'sub-product-lists'
            }
          >
            <li>
              <i className="fa-solid fa-angle-right"></i>
              <Link to="#">Instant Milk Chilling Plant</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
