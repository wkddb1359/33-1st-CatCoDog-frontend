import React from 'react';
import './Star.scss';

function Star({ starCount }) {
  const changeStar = Number(starCount);

  return (
    <>
      {new Array(changeStar).fill().map((_, i) => {
        return (
          <span className="star" key={i}>
            ⭐
          </span>
        );
      })}
    </>
  );
}

export default Star;
