import React from 'react';
import './ListName.scss';

const ListName = ({ id, title }) => {
  return (
    <div>
      <div className="leftList" key={id}>
        <ul>
          <li className="listName">{title}</li>
        </ul>
      </div>
    </div>
  );
};

export default ListName;
