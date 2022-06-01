import React from 'react';
import './ProductListNav.scss';

const ProductListNav = ({
  NAV_NAME_DATA,
  setSelected,
  selected,
  pageMove,
  setPageLimit,
}) => {
  return (
    <div className="productListNav">
      <nav className="navBar">
        <ul className="navList">
          {NAV_NAME_DATA.map(({ id, name }) => (
            <li
              key={id}
              onClick={() => {
                setSelected(name);
                pageMove(name);
                setPageLimit(12);
              }}
              className={`listName ${selected === name ? 'activate' : ''}`}
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
