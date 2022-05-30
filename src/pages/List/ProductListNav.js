import React from 'react';
import { useState } from 'react';
import './ProductListNav.scss';

const ProductListNav = ({ NAV_NAME_DATA }) => {
  const [selected, setSelected] = useState('');
  return (
    <div className="productListNav">
      <nav className="navBar">
        <ul className="navList">
          {NAV_NAME_DATA.map(({ id, name }) => (
            <li
              key={id}
              onClick={() => setSelected(id)}
              className={`listName ${selected === id ? 'activate' : ''}`}
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProductListNav;
