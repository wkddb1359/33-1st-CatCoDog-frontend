import React from 'react';
import './Star.scss';

function Star() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((a, i) => {
        return <i className="fa-solid fa-star" key={i} />;
      })}
    </>
  );
}

export default Star;
