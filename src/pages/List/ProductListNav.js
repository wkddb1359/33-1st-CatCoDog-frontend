import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductListNav.scss';

const ProductListNav = ({
  NAV_NAME_DATA,
  setListId,
  setSelected,
  selected,
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const pageMove = listId => {
    navigate(`/cat/${listId}`);
  };
  console.log(params.listId);

  return (
    <div className="productListNav">
      <nav className="navBar">
        <ul className="navList">
          {NAV_NAME_DATA.map(({ id, name, listId }) => (
            <li
              key={id}
              onClick={() => {
                setSelected(id);
                setListId(listId);
                pageMove(listId);
              }}
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
