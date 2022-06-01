import React from 'react';
import { useParams } from 'react-router-dom';
const Detail = () => {
  const params = useParams();
  return (
    <>
      <div>Detail페이지 입니당.</div>
      <p>{params.id}</p>
    </>
  );
};

export default Detail;
