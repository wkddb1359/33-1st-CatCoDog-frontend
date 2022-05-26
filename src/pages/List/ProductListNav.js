import React from 'react';
import NAV_NAME_DATA from './navNameData';
import { useState } from 'react';
import './ProductListNav.scss';

const ProductListNav = () => {
  const [selected, setSelected] = useState('');
  return (
    <div className="listNavContainer">
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
