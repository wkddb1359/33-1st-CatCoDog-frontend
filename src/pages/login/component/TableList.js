import React from 'react';
import './TableList.scss';

const TableList = ({ name, standard }) => {
  return (
    <div className="table">
      <div className="firstRow">
        <span className="tableInnerText1">{name}</span>
        <span className="tableInnerText2">{standard}</span>
      </div>
    </div>
  );
};

export default TableList;

const 
